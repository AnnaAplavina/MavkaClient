import { IconBadge } from '@/components/icon-badge';
import { User, Clock, X } from "lucide-react";
import React from 'react';

interface NewsModalTypes {
    title: string;
    content: string;
    author: string | null;
    date: string;
    category: string;
    imageUrl: string | null;
    isOpen: boolean;
    onClose: () => void;
  };

export const Modal = ({ title, content, author, date, imageUrl, category, isOpen, onClose } : NewsModalTypes) => {
    if (!isOpen) { return null; }

    const contentWithBreaks = content.split("\n").map((line, index) => ( <React.Fragment key={index}> {line} {index < content.split("\n").length - 1 && <br />} </React.Fragment> ));


  return (
    <div className="fixed top-0 left-0 flex items-top justify-center w-full h-full bg-gray-900 bg-opacity-75 z-50 overflow-y-auto ">
      <div className="bg-white p-8 rounded-xl w-[700px] mt-16 mb-16 h-fit relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
          <X/>
        </button>
        {imageUrl !== null ?
          <div className="relative w-full max-h-96 aspect-video rounded-md overflow-hidden mb-8">
            <img
              className="object-cover w-full h-full"
              alt={title}
              src={imageUrl}
            />
          </div> 
        : null}
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p>{contentWithBreaks}</p>
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
  );
};


