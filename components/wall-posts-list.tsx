import { WallPostCard } from "@/components/wall-post-card";
import { getWallPosts } from '@/db_methods/methods';

export const WallPostsList = async ({ user_id }: {user_id: string}) => {
    const wall_posts = await getWallPosts(user_id);

    return (
    <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            {wall_posts.map((item) => (
                <WallPostCard
                    key={item.wall_post_id}
                    wall_post_id={item.wall_post_id}
                    wall_post_name={item.wall_post_name}
                    wall_post_description={item.wall_post_description}
                    wall_post_text={item.wall_post_text}
                    is_available={item.is_available}
                    is_preview={item.is_preview}
                    position={item.position}
                    wall_id={item.wall_id}
                    created_at={item.created_at}
                />
            ))}
        </div>
        {wall_posts.length === 0 && (
            <div className="text-center text-sm text-muted-foreground mt-10">
            No wall posts found
            </div>
        )}
    </div>
  )
}