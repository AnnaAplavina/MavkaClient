import { auth } from "@/app/coolAuth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Eye, LayoutDashboard, Video } from "lucide-react";
import { getWallPostByIdAndWall } from "@/db_methods/methods";


import { IconBadge } from "@/components/icon-badge";
import { Banner } from "@/components/banner";

import { WallPostTitleForm } from "./_components/wall-post-title-form";
import { WallPostDescriptionForm } from "./_components/wall-post-description-form";
import { WallPostAccessForm } from "./_components/wall-post-access-form";
import { WallPostActions } from "./_components/wall-post-actions";

const WallPostIdPage = async ({
  params
}: {
  params: { wallId: string; walLPostId: string }
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const wall_post = await getWallPostByIdAndWall(params.wallId, params.wallPostId);

  if (!wall_post) {
    return redirect("/")
  }

  const requiredFields = [
    wall_post.title,
    wall_post.description,
    wall_post.videoUrl,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!wall_post.isPublished && (
        <Banner
          variant="warning"
          label="This wall post is unpublished. It will not be visible in the wall"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/admin/walls/${params.wallId}`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to wall setup
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium">
                  Wall post Creation
                </h1>
                <span className="text-sm text-slate-700">
                  Complete all fields {completionText}
                </span>
              </div>
              <WallPostActions
                disabled={!isComplete}
                wallId={params.wallId}
                wallPostId={params.wallPostId}
                isPublished={wall_post.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">
                  Customize your wall post
                </h2>
              </div>
              <WallPostTitleForm
                initialData={wall_post}
                wallId={params.wallId}
                wallPostId={params.walLPostId}
              />
              <WallPostDescriptionForm
                initialData={wall_post}
                wallId={params.wallId}
                wallPostId={params.walLPostId}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={Eye} />
                <h2 className="text-xl">
                  Access Settings
                </h2>
              </div>
              <WallPostAccessForm
                initialData={wall_post}
                wallId={params.wallId}
                wallPostId={params.wallPostId}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Video} />
              <h2 className="text-xl">
                Add a video
              </h2>
            </div>
            <WallPostVideoForm
              initialData={wall_post}
              wallPostId={params.wallPostId}
              wallId={params.wallId}
            />
          </div>
        </div>
      </div>
    </>
   );
}
 
export default WallPostIdPage;