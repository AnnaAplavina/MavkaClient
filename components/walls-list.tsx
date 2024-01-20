import { WallContent } from '@/db_interfaces/interfaces';
import { WallCard } from "@/components/wall-card";

interface CategoryContent {
  id: string;
  name: string;
}

type WallWithProgressWithCategory = WallContent & {
  category: CategoryContent | null;
  wall_posts: { id: string }[];
  progress: number | null;
};

interface WallsListProps {
  items: WallWithProgressWithCategory[];
}

export const WallsList = ({
  items
}: WallsListProps) => {
  
  console.log(items);
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <WallCard
            key={item.wall_id}
            id={item.wall_id}
            title={item.title}
            imageUrl={item.image_url!}
            progress={item.progress}
            category={item?.category?.name!}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No walls found
        </div>
      )}
    </div>
  )
}