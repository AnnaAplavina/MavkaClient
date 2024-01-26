"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { auth } from "@/app/coolAuth";
import { getAddress } from "@/db_methods/methods";

interface WallPostActionsProps {
  disabled: boolean;
  wallId: string;
  wallPostId: string;
  isPublished: boolean;
};

export const WallPostActions = ({
  disabled,
  wallId,
  wallPostId,
  isPublished
}: WallPostActionsProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        // await axios.patch(`/api/walls/${wallId}/wall_posts/${wallPostId}/unpublish`); // TODO
        await axios.patch(`${getAddress()}/walls/${wallId}/wall_posts/${wallPostId}/unpublish`, {
          params: {
            "user_id": auth()
          }
        });
        toast.success("Wall post unpublished");
      } else {
        // await axios.patch(`/api/walls/${wallId}/wall_posts/${wallPostId}/publish`); // TODO
        await axios.patch(`${getAddress()}/walls/${wallId}/wall_posts/${wallPostId}/publish`, {
          params: {
            "user_id": auth()
          }
        });
        toast.success("Wall post published");
      }

      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }
  
  const onDelete = async () => {
    try {
      setIsLoading(true);

      // await axios.delete(`/api/walls/${wallId}/wall_posts/${wallPostId}`); // TODO

      await axios.delete(`${getAddress()}/walls/${wallId}/wall_posts/${wallPostId}`, {
        params: {
          "user_id": auth()
        }
      });

      toast.success("Wall post deleted");
      router.refresh();
      router.push(`/admin/walls/${wallId}`);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading}>
          <Trash className="h-4 w-4" />
        </Button>
      </ConfirmModal>
    </div>
  )
}