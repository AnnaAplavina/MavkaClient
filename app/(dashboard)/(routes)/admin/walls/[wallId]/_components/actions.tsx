"use client";

import { auth } from "@clerk/nextjs";
import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import { getAddress } from "@/db_methods/methods";

interface ActionsProps {
  disabled: boolean;
  wallId: string;
  isPublished: boolean;
};

export const Actions = ({
  disabled,
  wallId,
  isPublished
}: ActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        // await axios.patch(`/api/walls/${wallId}/unpublish`); // TODO
        await axios.patch(`${getAddress()}/walls/${wallId}/unpublish`, {
          params: {
            "user_id": auth()
          }
        });
        toast.success("Wall unpublished");
      } else {
        // await axios.patch(`/api/walls/${wallId}/publish`); // TODO
        await axios.patch(`${getAddress()}/walls/${wallId}/publish`, {
          params: {
            "user_id": auth()
          }
        });
        toast.success("Wall published");
        confetti.onOpen();
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

      // await axios.delete(`/api/walls/${wallId}`); // TODO
      await axios.delete(`${getAddress()}/walls/${wallId}`, {
        params: {
          "user_id": auth()
        }
      });

      toast.success("Wall deleted");
      router.refresh();
      router.push(`/admin/walls`);
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