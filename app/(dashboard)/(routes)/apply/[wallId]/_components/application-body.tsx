"use client";
import React from 'react';
import { WallContent } from '@/db_interfaces/interfaces';

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";


const formSchema = z.object({
  experience: z.string().min(1, {
    message: "Title is required",
  }),
  bossId: z.string().min(1),
  divisionName: z.string().min(1),
  currentPosition: z.string().min(1),
  totalExperience: z.string().min(1),
  achievements: z.string().min(1),
});

interface CategoryFormProps {
    initialData: WallContent;
    applicationId: string;
    options: { label: string; value: string; }[];
  };


export const ApplicationBody = ({initialData, applicationId, options}: CategoryFormProps) => {

    const [isEditing, setIsEditing] = useState(true);

    const toggleEdit = () => setIsEditing((current) => !current);

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        experience: initialData?.title || "", 
        bossId: initialData?.category_id || "" // TODO
      },
    });

    
    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/applications/${applicationId}`, values);
            toast.success("Заявка сохранена");
            toggleEdit();
            router.refresh();
        } catch {
            toast.error("Что-то пошло не так");
        }
    }


    return (
        <div className="mt-6 border bg-slate-100 rounded-md p-4">
          <div className="font-medium flex items-center justify-between mt-1">
            <Button onClick={toggleEdit} variant="ghost">
              {isEditing ? "Отмена" : "Редактировать"}
              {isEditing && <Pencil className="h-4 w-4 ml-3" />}
            </Button>
          </div>

          {!isEditing && (
            <p className="text-sm mt-1">
              {initialData.title}
            </p>
          )}
          {isEditing && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-12 mt-1"
              >

                <FormField
                  control={form.control}
                  name="subId"
                  render={({ field }) => (
                    <FormItem className="flex items-center my-4">
                      <label className="text-sm text-gray-600" style={{ whiteSpace: "nowrap", marginRight: "10px" }}>
                        Тир подписки
                      </label>
                      <FormControl>
                        <Combobox
                          options={...options}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="form1"
                  render={({ field }) => (
                    <FormItem className="my-4">
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          placeholder="form1"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="form2"
                  render={({ field }) => (
                    <FormItem className="my-4">
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          placeholder="form2"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center gap-x-2">
                  <Button
                    disabled={!isValid || isSubmitting}
                    type="submit"
                  >
                    Сохранить
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </div>
    )
}
