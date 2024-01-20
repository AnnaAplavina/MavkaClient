import Link from "next/link";
import { GalleryVerticalEnd } from "lucide-react";

import { IconBadge } from "@/components/icon-badge";
import { WallProgress } from "@/components/wall-progress";

interface WallCardProps {
  id: string;
  title: string;
  imageUrl: string;
  progress: boolean | null;
  category: string;
};

export const WallCard = ({
  id,
  title,
  imageUrl,
  progress,
  category
}: WallCardProps) => {
  return (
    <Link href={`/walls/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <img
            className="object-cover"
            alt={title}
            src={imageUrl}
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">
            {category}
          </p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size="sm" icon={GalleryVerticalEnd} />
              <span>
                Записей
              </span>
            </div>
          </div>
          {progress !== null ? (
            <WallProgress
              variant={progress ? "success" : "default"}
              size="sm"
              value={progress}
            />
          ) : (
            <p className="text-md md:text-sm font-medium text-slate-700">
              {"Вы ещё не подписаны на эту стенку"}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}