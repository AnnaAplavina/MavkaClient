import React from 'react';
import { ScheduleElement } from "./schedule-element";
import { redirect } from "next/navigation";
import { Maximize2 } from 'lucide-react';

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const days_short = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

interface ScheduleElementTypes {
    id: number;
    start_time: string;
    end_time: string;
    place: string;
};

interface ScheduleDayTypes {
    id: number;
    date_string: string;
    events: ScheduleElementTypes[];
};

function convertTime(time_str: string) {
    const [hours, minutes] = time_str.split(":");
    return (parseInt(hours, 10) * 60 + parseInt(minutes, 10)) - 480;
}

function createListElements(events: ScheduleElementTypes[]) {
    const elements = [];

    for (const event of events) {
        elements.push(
        <div className='p-1 pl-2 pr-2'>
            <ScheduleElement 
              key={event.id}
              id={event.id}
              start_time={event.start_time}
              end_time={event.end_time}
              place={event.place}
            />
        </div>)
    }

    return elements;
}

const schedule = [
    { 
    id: 1,
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
    },],},{ 
    id: 2,
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
    },],},{ 
    id: 3,
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
    },],},{ 
    id: 4,
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
    },],},{ 
    id: 5,
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
    },],},{ 
    id: 6,
    date_string: "2023-10-21",
    events: [],
    },{ 
    id: 7,
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

export const SingleDaySchedule = () => {

    // request schedule by day
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    console.log(formattedDate);
        // TODO req here
        var day_schedule = schedule[0];
    
    const day = new Date(day_schedule.date_string);

    const renderedElements = createListElements(day_schedule.events);
    return (
        <div className="border rounded-lg shadow-sm max-w-xs m-2 p-2 bg-slate-50 hover:shadow-md">
          <div className='p-2'>
            <p className='text-lg font-semibold text-black'>Расписание на сегодня</p>
            <a href="/schedule">
              <div className='flex items-center'>
                <Maximize2  className='w-4 h-4 text-slate-500'/>
                <p className='text-sm text-slate-500 ml-2'>Расписание</p>
              </div>
            </a>
          </div>
          <div>
              {renderedElements} 
          </div>
        </div>
    );
}
