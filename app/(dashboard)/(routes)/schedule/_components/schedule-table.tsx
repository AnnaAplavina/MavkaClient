import React from 'react';
import { ScheduleDay } from "./schedule-day"
import { ScheduleSingleDay } from "./schedule-single-day"
import { CalendarDays } from "lucide-react";

const items = [
  { id: 1,
    date_string: "2023-10-16",
    events: [
    {
      id: 1,
      start_time: "8:00",
      end_time: "9:40",
      place: "Место"},
    {
      id: 2,
      start_time: "18:00",
      end_time: "19:10",
      place: "Место 2"
    },],
  },
  { id: 2,
    date_string: "2023-10-17",
    events: [
    {
      id: 4,
      start_time: "8:20",
      end_time: "9:50",
      place: "Место"},
    {
      id: 5,
      start_time: "10:00",
      end_time: "11:40",
      place: "Место"},
    {
      id: 1,
      start_time: "15:00",
      end_time: "16:40",
      place: "Место"},
    {
      id: 2,
      start_time: "17:00",
      end_time: "18:10",
      place: "Место 2"
    },],
  },
  { id: 3,
    date_string: "2023-10-18",
    events: [
    {
      id: 3,
      start_time: "10:00",
      end_time: "11:40",
      place: "Место"},
    {
      id: 1,
      start_time: "12:00",
      end_time: "13:10",
      place: "Место 2"
    },],
  },
  { id: 4,
    date_string: "2023-10-19",
    events: [
    {
      id: 2,
      start_time: "10:40",
      end_time: "12:10",
      place: "Место"},
    {
      id: 3,
      start_time: "14:00",
      end_time: "15:50",
      place: "Место 2"
    },],
  },
  { id: 5,
    date_string: "2023-10-20",
    events: [
    {
      id: 1,
      start_time: "9:20",
      end_time: "10:50",
      place: "Место"},
    {
      id: 2,
      start_time: "15:00",
      end_time: "16:30",
      place: "Место 2"
    },],
  },
  { id: 6,
    date_string: "2023-10-21",
    events: [],
  },
  { id: 7,
    date_string: "2023-10-22",
    events: [
    {
      id: 1,
      start_time: "10:00",
      end_time: "11:40",
      place: "Место"},
    {
      id: 3,
      start_time: "12:00",
      end_time: "13:10",
      place: "Место 2"
    },],
  }
];


export const Schedule = () => {
    // items.map((notif) => (this.addNotification(notif)));
    // this.addNotification(items[0]);
  return (
    <div>
      <div className="flex flex-row mr-2">
        <div className="hidden flex-col h-full md:hidden lg:flex xl:flex 2xl:flex" >
          <div className="border rounded-lg text-xl text-center p-2 m-2 h-12">
            <CalendarDays size="md"/>
          </div>
          <div className='pt-4 pb-4 flex-row justify-between'>  
            <div className="border rounded-lg text-xl text-center p-2 m-2 mt-0 h-[54px] w-[72px]">09:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 h-[54px] w-[72px]">10:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 h-[54px] w-[72px]">11:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 h-[54px] w-[72px]">12:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 h-[54px] w-[72px]">13:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 h-[54px] w-[72px]">14:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 h-[54px] w-[72px]">15:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 h-[54px] w-[72px]">16:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 h-[54px] w-[72px]">17:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 h-[54px] w-[72px]">18:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 h-[54px] w-[72px]">19:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 h-[54px] w-[72px]">20:00</div>
            <div className="border rounded-lg text-xl text-center p-2 m-2 mb-0 h-[54px] w-[72px]">21:00</div>
          </div>
        </div>
        <div className="flex md:hidden lg:hidden xl:hidden 2xl:hidden">
          <ScheduleSingleDay  
            key={items[0].id}
            id={items[0].id}
            date_string={items[0].date_string}
            events={items[0].events}
          />
        </div>
        <div className="hidden grid-cols-7 max-h-min md:grid lg:grid xl:grid 2xl:grid gap-1">
          {items.map((sday) => (
            <ScheduleDay 
              key={sday.id}
              id={sday.id}
              date_string={sday.date_string}
              events={sday.events}
            />
          ))}
        </div>
          {items.length === 0 && ( <div className="text-center text-sm text-muted-foreground mt-10"> No schedule found </div>)}
      </div>

    </div>
  );
};


