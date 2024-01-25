import Link from "next/link";
import { GalleryVerticalEnd } from "lucide-react";

import { IconBadge } from "@/components/icon-badge";
import { WallProgress } from "@/components/wall-progress";
import { WallPostContent } from "@/db_interfaces/interfaces";


export const WallPostCard = ({ wall_post_id, wall_post_name, wall_post_description, wall_post_text, is_available, is_preview, position, wall_id, created_at }: WallPostContent) => {
  const imageUrl = "https://media.tatler.ru/photos/619795a8c2aa8983556eaf97/3:2/w_656,h_437,c_limit/327893448828.jpg"; // TODO
  return (
    <Link href={`/walls/${wall_id}/wall-posts/${wall_post_id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <img
            className="object-cover"
            alt={wall_post_name}
            src={imageUrl}
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {wall_post_name}
          </div>
          <p className="text-xs text-muted-foreground">
            {wall_post_description}
          </p>
          <p className="text-xs text-muted-foreground">
            {wall_post_text}
          </p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size="sm" icon={GalleryVerticalEnd} />
              <span>
                {1} Записей
              </span>
            </div>
          </div>
            <p className="text-md md:text-sm font-medium text-slate-700">
              {"Предпросмотр"}
            </p>
        </div>
      </div>
    </Link>
  )
}