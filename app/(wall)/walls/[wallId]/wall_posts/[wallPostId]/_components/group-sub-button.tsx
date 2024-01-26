"use client"
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export const GroupSubButton = ({wall_id}: {wall_id: string}) => {
  const onClick = () => {
    return redirect(`/subscribe/${wall_id}`)
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