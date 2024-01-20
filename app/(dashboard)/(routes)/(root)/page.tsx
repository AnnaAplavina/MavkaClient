import React from 'react';
import { SingleDaySchedule } from './_components/single-day-schedule';
import { SimpleStatsModule } from './_components/simple-stats-module';
import { WallsList } from './_components/walls-list';


const MainPage = () => {
  
  return (    
    <div className='bg-purple-100 w-full h-full flex flex-col'>
        <div className='bg-gray-300 max-w-96 h-full max-h-96 min-h-56 m-16 mb-0 overflow-hidden rounded-t-2xl relative'>
          <img 
          src="https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" 
          className='bg-cover overflow-clip object-cover rounded-t w-full h-full absolute' />
          <div className='flex'>
            <img
            src="https://www.film.ru/sites/default/files/people/1456176-2225954.jpeg"
            className='w-40 h-40 object-cover absolute z-10 bottom-4 left-6 rounded-full border-4  border-gray-900'/>
          </div>
          <div className='bg-gray-900 flex min-h-14 w-full max-w-full pl-64 absolute bottom-0'>
            <div className='p-6 text-slate-500 font-sans border-b-4 border-blue-400 border-solid'>
              Link 0
            </div>
            <div className='p-6 text-slate-500 font-sans'>
              Link 1
            </div>
            <div className='p-6 text-slate-500 font-sans'>
              Link 2
            </div>
            <div className='p-6 text-slate-500 font-sans'>
              Link 3
            </div>
          </div>
        </div>
        <div className='bg-gray-400 h-full max-h-96 min-h-56 m-16 mt-8 relative'>
          <div>
            {/* <div>
              <SingleDaySchedule />
            </div>
            <div>
              <SimpleStatsModule />
            </div> 
            <div>
              <WallsList />
            </div>*/}
          </div>
        </div>
    </div>
  );
}

export default MainPage;
