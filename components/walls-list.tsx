import { WallContent, CategoryContent } from '@/db_interfaces/interfaces';
import { WallCard } from "@/components/wall-card";

type WallWithCategory = WallContent & {
  category: CategoryContent | null;
  wall_posts: { id: string }[];
};

interface WallsListProps {
  items: WallWithCategory[];
}

export const WallsList = ({
  items
}: WallsListProps) => {
  
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <WallCard
            key={item.wall_id}
            id={item.wall_id}
            title={item.title}
            description={item.description}
            imageUrl={item.image_url!}
            progress={false}
            category={item?.category?.name!}
            wall_posts={item.wall_posts}
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