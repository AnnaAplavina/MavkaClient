import axios from 'axios';
import { checkIsMember, getWallById, getWallPostById, getAttachments, getWallPostByPosition, getUserSub, getUserFeedback } from '@/db_methods/methods';
import { WallContent, WallPostContent, AttachmentContent, ProgressContent } from "@/db_interfaces/interfaces";

interface GetWallPostProps {
  userId: string;
  wallId: string;
  wallPostId: string;
};

export const getWallPost = async ({
  userId,
  wallId,
  wallPostId,
}: GetWallPostProps) => {
  try {
    
    const is_member = await checkIsMember({userId, wallId});
    const wall = await getWallById(wallId);
    const wallPost = await getWallPostById({wallPostId});

    if (!wallPost.is_available || !wall.is_available) {
      throw new Error("Запись или стена недоступны на данный момент");
    }

    let attachments: AttachmentContent[] = [];
    let nextWallPost: WallPostContent | null = null;

    if (!is_member) {
      // TODO Redirect 
      throw new Error("Вам недоступна эта стена");
    }

    attachments = await getAttachments({wallPostId});

    const position = wallPost.position;
    nextWallPost = await getWallPostByPosition({wallId, position});

    const userFeedback = await getUserFeedback();


    return {
      wallPost,
      wall,
      attachments,
      nextWallPost,
      userFeedback,
      is_member,
    };
  } catch (error) {
    console.log("[GET_WALL_POST]", error);
    return {
      wallPost: null,
      wall: null,
      attachments: [],
      nextWallPost: null,
      userFeedback: null,
      is_member: null,
    }
  }
}