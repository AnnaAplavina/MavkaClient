import { ScheduleElement } from "./schedule-element";

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


export const ScheduleSingleDay = ({id, date_string, events}: ScheduleDayTypes) => {
    
    const day = new Date(date_string);
    return (
    <div>
      <div className="border rounded-lg text-xl text-center p-2 m-2 h-12">
        {days[day.getDay()]}
      </div>
      <ul className="border rounded-lg">
        <ScheduleElement
          key={events[0].id}
          id={events[0].id}
          start_time={events[0].start_time}
          end_time={events[0].end_time}
          place={events[0].place}
          eheight={(convertTime(events[0].end_time)) - (convertTime(events[0].start_time))}
        />
      </ul> 
    </div>
    )
  }