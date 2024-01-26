import { auth } from "@/app/coolAuth";
import { redirect } from "next/navigation";
import { File, LayoutDashboard, ListChecks } from "lucide-react";
import { getAttachmentsByWall, getCategories, getWallPosts, getWallsByIdAndAdmin } from "@/db_methods/methods";

import { IconBadge } from "@/components/icon-badge";
import { Banner } from "@/components/banner";

import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { CategoryForm } from "./_components/category-form";
import { AttachmentForm } from "./_components/attachment-form";
import { WallPostsForm } from "./_components/wall_posts-form";
import { Actions } from "./_components/actions";


const WallsIdPage = async ({params}:{params:{ wallId: string }}) => {
  const { userId } = auth();
  if (!userId) { return redirect("/"); }
  //TODO
  const temp_user_id = "user_2WlV1B9tAJ82SQmgCPWn0FOvX7o";
  const wall = await getWallsByIdAndAdmin(temp_user_id, params.wallId);
  const wall_posts = await getWallPosts(params.wallId);
  const attachments = await getAttachmentsByWall(params.wallId);
  const categories = await getCategories();
  if (!wall) { return redirect("/"); }

  const requiredFields = [
    wall.title,
    wall.description,
    wall.imageUrl,
    wall.categoryId,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!wall.isPublished && (
        <Banner
          label="Эта стенка находится на этапе редактирования и не доступна пользователям."
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">
              Wall setup
            </h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            wallId={params.wallId}
            isPublished={wall.isPublished}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">
                Customize your wall
              </h2>
            </div>
            <TitleForm
              initialData={wall}
              wallId={wall.wall_id}
            />
            <DescriptionForm
              initialData={wall}
              wallId={wall.wall_id}
            />
            <ImageForm
              initialData={wall}
              wallId={wall.wall_id}
            />
            <CategoryForm
              initialData={wall}
              wallId={wall.wall_id}
              options={categories.map((category: any) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">
                  Wall posts
                </h2>
              </div>
              <WallPostsForm
                initialData={wall_posts}
                wallId={wall.wall_id}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={File} />
                <h2 className="text-xl">
                  Resources & Attachments
                </h2>
              </div>
              <AttachmentForm
                initialData={attachments}
                wallId={wall.wall_id}
              />
            </div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default WallIdPage;