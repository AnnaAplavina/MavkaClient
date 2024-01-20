import React from 'react';
import { AttachmentContent, WallContent } from '@/db_interfaces/interfaces';


interface AttachmentFormProps {
    initialData: WallContent & { attachments: AttachmentContent[] };
    applicationId: string;
};

export const TitleField = ({initialData, applicationId}: AttachmentFormProps) => {
    // return redirect(`/apply/${wall.id}/wall_posts/${wall.wall_posts[0].id}`);
    // TODO Check if user of wall
    return (
    <>
        <div className="mt-6 border bg-slate-100 rounded-md p-4">
            Сообщество: <br/>{initialData.name} 
        </div>
    </>
    );
}
