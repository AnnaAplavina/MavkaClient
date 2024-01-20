import { getWallById,  getWallPosts} from "@/db_methods/methods";
import { redirect } from "next/navigation";

const WallIdPage = async ({
  params
}: {
  params: { wallId: string; }
}) => {
    var wall = await getWallById(params.wallId);
    const wall_posts = await getWallPosts(params.wallId);
    wall.wall_posts = wall_posts;

  if (!wall) {
    return redirect("/");
  }

  return redirect(`/walls/${wall.wall_id}/wall_posts/${wall.wall_posts[0].wall_post_id}`);
}
 
export default WallIdPage;