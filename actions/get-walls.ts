import { CategoryContent, WallContent } from "@/db_interfaces/interfaces";
import { searchWalls, getWallPosts, getUserFeedback } from "@/db_methods/methods";

type WallWithFeedbackWithCategory = WallContent & {
  category: CategoryContent | null;
  wall_posts: { id: string }[];
  feedback: null;
};

type GetWalls = {
  userId: string;
  title?: string;
  categoryId?: string;
};

export const getWalls = async ({
  userId,
  title,
  categoryId
}: GetWalls): Promise<WallWithFeedbackWithCategory[]> => {
  try {
    const walls = await searchWalls(title, categoryId);
    console.log(walls);
    walls.map(async (wall: any) => {
      // wall.image_url = getImage(wall.image_url);
      wall.wall_posts = await getWallPosts(wall.id);
    })
    walls.map((wall: any) => {
      console.log(wall);
    })
    

    const wallsWithFeedback: WallWithFeedbackWithCategory[] = await Promise.all(
      walls.map(async (wall: any) => {
        if (!wall.is_available) {
          return {
            ...wall,
            feedback: null,
          }
        }

        const feedback = await getUserFeedback();

        return {
          ...wall,
          feedback: null, // TODO
        };
      })
    );

    return wallsWithFeedback;
  } catch (error) {
    console.log("[GET_WALLS]", error);
    return [];
  }
}