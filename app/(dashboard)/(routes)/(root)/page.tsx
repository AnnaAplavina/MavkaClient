import React from 'react';
import { SingleDaySchedule } from './_components/single-day-schedule';
import { SimpleStatsModule } from './_components/simple-stats-module';
import { WallCard } from '@/components/wall-card';
import { getAllWalls, getDashboardWalls } from '@/db_methods/methods';
import { CategoryContent, WallContent } from '@/db_interfaces/interfaces';
import { WallsList } from '@/components/walls-list';


const MainPage = async () => {
  
  const { recommendedWalls, subbedWalls } = await getDashboardWalls("200006");

  return (    
    <div className='w-full h-full flex flex-col'>
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
        <div className='h-full max-h-96 min-h-56 m-16 mt-8 relative'>
          <div>

          <WallsList items={[...recommendedWalls, ...subbedWalls]}/>
          {/* <div>
            <div className="grid sm:grid-cols-2 max-h-min md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
              {items.map((item) => (
                <WallCard
                  key={item.wall_id}
                  id={item.wall_id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.image_url!}
                  progress={false}
                  category={item?.category?.name!}
                  wall_posts={item.wall_posts}
                />
              ))}
            </div>
            {items.length === 0 && ( <div className="text-center text-sm text-muted-foreground mt-10"> No news found </div> )}
          </div> */}


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
