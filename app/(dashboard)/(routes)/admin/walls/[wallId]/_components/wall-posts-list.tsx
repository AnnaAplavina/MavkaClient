"use client";

import { WallPostContent } from "@/db_interfaces/interfaces";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Grip, Pencil } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface WallPostsListProps {
  items: WallPostContent[];
  onReorder: (updateData: { id: string; position: number }[]) => void;
  onEdit: (id: string) => void;
};

export const WallPostsList = ({
  items,
  onReorder,
  onEdit
}: WallPostsListProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [wall_posts, setWallPosts] = useState(items);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // console.log(items);
  useEffect(() => {
    setWallPosts(items);
  }, [items]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const items = Array.from(wall_posts);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const startIndex = Math.min(result.source.index, result.destination.index);
    const endIndex = Math.max(result.source.index, result.destination.index);

    const updatedWallPosts = items.slice(startIndex, endIndex + 1);

    setWallPosts(items);

    const bulkUpdateData = updatedWallPosts.map((wall_post) => ({
      id: wall_post.wall_post_id,
      position: items.findIndex((item) => item.wall_post_id === wall_post.wall_post_id)
    }));

    onReorder(bulkUpdateData);
  }

  if (!isMounted) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="wall_posts">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {wall_posts.map((wall_post, index) => (
              <Draggable 
                key={wall_post.wall_post_id} 
                draggableId={wall_post.wall_post_id} 
                index={index}
              >
                {(provided) => (
                  <div
                    className={cn(
                      "flex items-center gap-x-2 bg-slate-200 border-slate-200 border text-slate-700 rounded-md mb-4 text-sm",
                      wall_post.is_available && "bg-sky-100 border-sky-200 text-sky-700"
                    )}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <div
                      className={cn(
                        "px-2 py-3 border-r border-r-slate-200 hover:bg-slate-300 rounded-l-md transition",
                        wall_post.is_available && "border-r-sky-200 hover:bg-sky-200"
                      )}
                      {...provided.dragHandleProps}
                    >
                      <Grip
                        className="h-5 w-5"
                      />
                    </div>
                    {wall_post.wall_post_name}
                    <div className="ml-auto pr-2 flex items-center gap-x-2">
                      {wall_post.is_preview && (
                        <Badge>
                          Free
                        </Badge>
                      )}
                      <Badge
                        className={cn(
                          "bg-slate-500",
                          wall_post.is_available && "bg-sky-700"
                        )}
                      >
                        {wall_post.is_available ? "Published" : "Draft"}
                      </Badge>
                      <Pencil
                        onClick={() => onEdit(wall_post.wall_post_id)}
                        className="w-4 h-4 cursor-pointer hover:opacity-75 transition"
                      />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}