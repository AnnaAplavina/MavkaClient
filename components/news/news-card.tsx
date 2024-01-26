"use client"
import { User, Clock } from "lucide-react";
import { IconBadge } from "@/components/icon-badge";
import { useState } from 'react';
import { Modal } from "./news-modal";
import { NewsContent } from "@/db_interfaces/interfaces";


export const NewsCard = ({id, title, content, author, date, category, image_url}: NewsContent) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    const switchModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
      <div onClick={switchModal}>        
        <div className="group shadow-sm hover:shadow-lg transition overflow-hidden border rounded-lg p-3 h-full">
        {image_url !== null ?
          <div className="relative w-full aspect-video rounded-md overflow-hidden">
            <img
              className="object-cover w-full h-full"
              alt={title}
              src={image_url}
            />
          </div> 
        : null}
          <div className="flex flex-col pt-2">
            {image_url !== null ? <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-1">{title}</div> : null}
            {image_url === null ? <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-3">{title}</div> : null}
            {image_url !== null ? <p className="text-xs overflow-hidden max-h-24 line-clamp-5">{content}</p> : null}
            {image_url === null ? <p className="text-xs overflow-hidden max-h-72 line-clamp-15">{content}</p> : null}
            <p className="text-xs text-muted-foreground">
              {category}
            </p>
            <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            {author !== null ?
              <div className="flex items-center gap-x-1 text-slate-500">
                <IconBadge size="sm" icon={User} />
                <span>Опубликовал: {author}</span>
              </div> 
            : null}
              <div className="flex items-center gap-x-1 text-slate-500">
                <IconBadge size="sm" icon={Clock} />
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
        <Modal
          title={title}
          content={content}
          author={author}
          date={date}
          imageUrl={image_url}
          category={category}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    )
  }