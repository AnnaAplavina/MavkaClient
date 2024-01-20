"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { WallPostContent, WallContent } from "@/db_interfaces/interfaces";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

import { WallPostsList } from "./wall_posts-list";
import { auth } from "@clerk/nextjs";
import { getAddress   } from "@/db_methods/methods";

interface WallPostsFormProps {
  initialData: WallPostContent[];
  wallId: string;
};

const formSchema = z.object({
  title: z.string().min(1),
});

export const WallPostsForm = ({
  initialData,
  wallId
}: WallPostsFormProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleCreating = () => {
    setIsCreating((current) => !current);
  }
  // const initialWallPosts = getWallPosts(wallId) as unknown as WallPostContent[]; // TODO
  // getWallPosts(wallId).then((data: WallPostContent[]) => {
  //   console.log(data);
  // // });
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // await axios.post(`/api/walls/${wallId}/wall_posts`, values); // TODO
      await axios.post(`${getAddress()}/walls/${wallId}/wall_posts`, {
        params: {
          values,
          user_id: "user_2WlV1B9tAJ82SQmgCPWn0FOvX7o"
        }
      });
      toast.success("Wall posts created");
      toggleCreating();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  }

  const onReorder = async (updateData: { id: string; position: number }[]) => {
    try {
      setIsUpdating(true);

      // await axios.put(`/api/walls/${wallId}/wall_posts/reorder`, { // TODO
      //   list: updateData
      // });
      await axios.put(`${getAddress()}/walls/${wallId}/wall_posts/reorder`, {
          list: updateData,
          "user_id": auth()
      });
      toast.success("Wall posts reordered");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsUpdating(false);
    }
  }

  const onEdit = (id: string) => {
    router.push(`/admin/walls/${wallId}/wall_posts/${id}`);
  }

  return (
    <div className="relative mt-6 border bg-slate-100 rounded-md p-4">
      {isUpdating && (
        <div className="absolute h-full w-full bg-slate-500/20 top-0 right-0 rounded-m flex items-center justify-center">
          <Loader2 className="animate-spin h-6 w-6 text-sky-700" />
        </div>
      )}
      <div className="font-medium flex items-center justify-between">
        Wall posts
        <Button onClick={toggleCreating} variant="ghost">
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a wall post
            </>
          )}
        </Button>
      </div>
      {isCreating && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Introduction to the wall'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={!isValid || isSubmitting}
              type="submit"
            >
              Create
            </Button>
          </form>
        </Form>
      )}
      {!isCreating && (
        <div className={cn(
          "text-sm mt-2",
          !initialData.length && "text-slate-500 italic"
        )}>
          {!initialData.length && "No wall posts"}
          <WallPostsList
            onEdit={onEdit}
            onReorder={onReorder}
            items={initialData || []}
          />
        </div>
      )}
      {!isCreating && (
        <p className="text-xs text-muted-foreground mt-4">
          Drag and drop to reorder the wall posts
        </p>
      )}
    </div>
  )
}