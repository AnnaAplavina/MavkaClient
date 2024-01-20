import { auth } from "@/app/coolAuth";
import { redirect } from "next/navigation";
import { ClipboardEdit } from "lucide-react";
import { getAttachmentsByWall, getWallPosts, getWallById } from "@/db_methods/methods";

import { IconBadge } from "@/components/icon-badge";
import { Banner } from "@/components/banner";

import { TitleField } from "./_components/title-field";
import { ApplicationBody } from "./_components/application-body";
import { Actions } from "./_components/actions";

export const ApplicationsForm = async ({params}:{params: {wallId: string}}) => {
  const { userId } = auth();

  // TODO: Создать Application в бд и вернуть id
  const application = {
    id: "8888",
  };

  if (!userId) {
    return redirect("/");
  }

  const wall = await getWallById(params.wallId);
  wall.wall_posts = await getWallPosts(params.wallId);
  wall.attachment = await getAttachmentsByWall(params.wallId);

  if (!wall) {
    return redirect("/");
  }   

  const sub_tiers = [{

  },
  {
    
  }
    //TODO
  ];

  const isComplete = true; // TODO Check if complete

  return (
    <>
      {!wall.isPublished && (
        <Banner
          label="Эта заявка находится на этапе редактирования и недоступна для отправки"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">
              Заявка куда не знаю куда
            </h1>
            <span className="text-sm text-slate-700">
              Заполните все поля
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            wallId={params.wallId}
            isPublished={wall.isPublished}
          />

        </div>
        <TitleField
            initialData={wall}
            applicationId={wall.id}
            />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={ClipboardEdit} />
              <h2 className="text-xl">
                Личные данные
              </h2>
            </div>
            <ApplicationBody
              initialData={wall}
              applicationId={application.id}
              options={sub_tiers.map((sub) => ({
                label: sub.name,
                value: String(sub.id),
              }))}
            />
            
          </div>
        </div>
      </div>
    </>
   );
}
 
export default ApplicationsForm;