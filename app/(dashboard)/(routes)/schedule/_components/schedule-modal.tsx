import { IconBadge } from '@/components/icon-badge';
import { User, Clock } from "lucide-react";
import React from 'react';

interface NewsModalTypes {
    title: string;
    start_time: string;
    end_time: string;
    event_holder: string;
    place: string;
    isOpen: boolean;
    onClose: () => void;
  };




function convertTime(time_str: string) {
    const [hours, minutes] = time_str.split(":");
    return (parseInt(hours, 10) * 60 + parseInt(minutes, 10)) - 480;
}

export const ScheduleModal = ({ title, start_time, end_time, event_holder, place, isOpen, onClose } : NewsModalTypes) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-72 h-fit z-50 border">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p>{start_time}-{end_time}</p>
        <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
          <div className="flex items-center gap-x-1 text-slate-500">
            <IconBadge size="sm" icon={User} />
            <span>{event_holder}</span>
          </div> 
          <div className="flex items-center gap-x-1 text-slate-500">
            <IconBadge size="sm" icon={Clock} />
            <span>{convertTime(end_time) - convertTime(start_time)} минут</span>
          </div>
        </div>
      </div>
    </div>
  );
};


