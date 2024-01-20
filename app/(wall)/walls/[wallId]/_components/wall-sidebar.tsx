import { auth } from "@/app/coolAuth";
import { WallPostContent, WallContent, ProgressContent } from "@/db_interfaces/interfaces";
import { redirect } from "next/navigation";

import { WallProgress } from "@/components/wall-progress";
import { WallSidebarItem } from "./wall-sidebar-item";


interface WallSidebarProps {
  wall: WallContent & {
    wall_posts: (WallPostContent & {
      userProgress: ProgressContent[] | null;
    })[]
  };
  progressCount: number;
};

export const WallSidebar = async ({
  wall,
  progressCount,
}: WallSidebarProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold">
          {wall.name}
        </h1>
        {wall.is_available && (
          <div className="mt-10">
            <WallProgress
              variant="success"
              value={progressCount}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        {wall.wall_posts.map((wall_post) => (
          <WallSidebarItem
            key={wall_post.wall_post_id}
            id={wall_post.wall_post_id}
            label={wall_post.wall_post_name}
            isCompleted={!!wall_post.userProgress?.[0]?.is_completed}
            wallId={wall.wall_id}
            isLocked={!(wall_post.is_available || wall_post.is_preview)}
          />
        ))}
      </div>
    </div>
  )
}