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

// Конвертим в минуты от 8 часов утра
function convertTime(time_str: string) {
    const [hours, minutes] = time_str.split(":");
    return (parseInt(hours, 10) * 60 + parseInt(minutes, 10)) - 480;
}


//Рисуем табличку по времени 1 минута == 1 пиксель, но отсчёт с 8 утра до 22 вечера (Максимальная высота 840px)
function convertAndRenderIntervals(data : ScheduleDayTypes) {
    const intervals = data.events.map(event => [convertTime(event.start_time), convertTime(event.end_time)]);
    intervals.sort((a, b) => a[0] - b[0]);
    
    const elements = [];
    let currentPosition = 0;
  
    for (const interval of intervals) {
      const start = interval[0];
      const end = interval[1];
  
      if (currentPosition < start) {elements.push(<div key={`red-${currentPosition}-${start}`} style={{ height: `${start - currentPosition}px` }}></div>);}
  
      const event = data.events.find((e) => (start >= (convertTime(e.start_time)) && end <= (convertTime(e.end_time))));
  
      if (event) { elements.push(
        <ScheduleElement
          key={event.id}
          id={event.id}
          start_time={event.start_time}
          end_time={event.end_time}
          place={event.place}
          eheight={(convertTime(event.end_time)) - (convertTime(event.start_time))}
        />
      );}
  
      currentPosition = end;
    }
  
    if (currentPosition < 840) { elements.push(<div key={`red-${currentPosition}-840`} style={{height: `${840 - currentPosition}px`}}></div>); }
  
    return elements;
}


export const ScheduleDay = ({id, date_string, events}: ScheduleDayTypes) => {
    const renderedIntervals = convertAndRenderIntervals({id, date_string, events});
    const day = new Date(date_string);
    return (
        <div>
            <div className="border rounded-lg text-xl p-2 m-2 h-12 flex justify-center">
                <p className="flex xl:hidden">{days_short[day.getDay()]}</p>
                <p className="hidden xl:flex">{days[day.getDay()]}</p>
            </div>
            <ul className="border rounded-lg">
                {renderedIntervals}
            </ul>
        </div>
    )
}