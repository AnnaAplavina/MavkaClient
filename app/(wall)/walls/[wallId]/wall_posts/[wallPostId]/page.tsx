import { auth } from "@/app/coolAuth";
import { redirect } from "next/navigation";
import { File } from "lucide-react";

import { getWallPost } from "@/actions/get-wall-posts";
import { Banner } from "@/components/banner";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";

import { GroupSubButton } from "./_components/group-sub-button";

const WallPostIdPage = async ({ params }: { params: { wallId: string; wallPostId: string } }) => {
  const { userId } = auth();
  
  if (!userId) {
    return redirect("/");
  } 

  const { wall_post, wall, attachments, nextWallPost, userFeedback } = await getWallPost({
    userId,
    wallPostId: params.wallPostId,
    wallId: params.wallId,
  });

  if (!wall_post || !wall) {
    return redirect("/")
  }


  const isLocked = !wall_post.is_available && !wall_post.is_preview;
  // TODO const completeOnEnd = !userFeedback?.seen;

  return ( 
    <div>
      {userFeedback?.seen && (
        <Banner
          variant="success"
          label="You've already seen this post."
        />
      )}
      {isLocked && (
        <Banner
          variant="warning"
          label="You need a subscription to this wall to watch this post."
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-2">
              {wall_post.wall_post_name}
            </h2>
              <GroupSubButton
                wall_id={params.wallId}
              />
          </div>
          <Separator />
          <div>
            <Preview value={wall_post.wall_post_description!} />
          </div>
          {!!attachments.length && (
            <>
              <Separator />
              <div className="p-4">
                {attachments.map((attachment) => (
                  <a 
                    href={attachment.url}
                    target="_blank"
                    key={attachment.id}
                    className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                  >
                    <File />
                    <p className="line-clamp-1">
                      {attachment.name}
                    </p>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
   );
}
 
export default WallPostIdPage;