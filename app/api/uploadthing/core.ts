import { auth } from "@/app/coolAuth";
import { createUploadthing, type FileRouter } from "uploadthing/next";

import { isAdmin } from "@/lib/admin";
 
const f = createUploadthing();
 
const handleAuth = () => {
  const { userId } = auth();
  const isAuthorized = isAdmin(userId);

  if (!userId || !isAuthorized) throw new Error("Unauthorized");
  return { userId };
}

export const ourFileRouter = {
  wallImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  wallAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  wallPostVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;