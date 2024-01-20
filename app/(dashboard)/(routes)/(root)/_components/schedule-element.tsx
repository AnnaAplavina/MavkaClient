"use client"
import { User } from "lucide-react";

import { IconBadge } from "@/components/icon-badge";

import { useState } from 'react';

import { ScheduleModal } from "./schedule-modal";

interface ScheduleElementTypes {
    id: number;
    start_time: string;
    end_time: string;
    place: string;
};

const wallsList = [{
  id: 1,
  title: "Корпоративная этика",
  title_short: "КЭ",
  admin: "Михайлов Г.М.",
  color: "border-l-indigo-500"
},{
  id: 2,
  title: "Техники публичных выступлений",
  title_short: "ТПВ",
  admin: "Дерден Т.А.",
  color: "border-l-orange-500"
},{
  id: 3,
  title: "Коммуникации и командообразование",
  title_short: "КИК",
  admin: "Вектор В.В.",
  color: "border-l-emerald-500"
},{
  id: 4,
  title: "Сторителлинг",
  title_short: "СТ",
  admin: "Сильверхенд Д.В.",
  color: "border-l-cyan-500"
},{
  id: 5,
  title: "Техники скрытого мошенничества",
  title_short: "СТ",
  admin: "Вайрус В.В.",
  color: "border-l-pink-500"
}]

export const ScheduleElement = ({id, start_time, end_time, place}: ScheduleElementTypes) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  

    const openModal = () => { setIsModalOpen(true); };
    
    const closeModal = () => { setIsModalOpen(false); };
    
    const switchModal = () => { 
      setIsModalOpen(!isModalOpen); };
    

    return (
      <div onMouseEnter={switchModal} onMouseLeave={closeModal} className=" bg-white">     
        <div className={`group shadow-sm hover:shadow-md transition overflow-hidden border rounded-lg pl-3 pr-3 pt-1.5 pb-1.5 h-full border-l-4 ${wallsList[id-1].color}`}>
          <div className="flex flex-col h-full">
            <div className="text-base md:text-sm font-medium group-hover:text-sky-700 transition line-clamp-3">{wallsList[id-1].title}</div>
            <p className="text-xs overflow-hidden max-h-4 line-clamp-5">{start_time}-{end_time}</p>
            <div className="mb-0 flex items-center gap-x-2 text-sm md:text-xs">
              <div className="flex items-center gap-x-1 text-slate-500">
                <IconBadge size="sm" icon={User} />
                <span>{wallsList[id-1].admin}</span>
              </div>
            </div>
          </div>
        </div>

        <ScheduleModal
          title={wallsList[id-1].title}
          start_time={start_time}
          end_time={end_time}
          event_holder={wallsList[id-1].admin}
          place={place}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    )
  }