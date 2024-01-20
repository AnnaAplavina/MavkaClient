"use client"
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export const GroupSubButton = ({groupId}: {groupId: string}) => {
  const onClick = () => {
    return redirect(`/subscribe/${groupId}`)
  }

  return (
    <Button
      onClick={onClick}
      size="sm"
      className="w-full md:w-auto"
    >
      Подписаться
    </Button>
  )
}