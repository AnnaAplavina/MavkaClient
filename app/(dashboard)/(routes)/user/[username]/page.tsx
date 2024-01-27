import React from 'react';
import { SingleDaySchedule } from './_components/single-day-schedule';
import { SimpleStatsModule } from './_components/simple-stats-module';
import { WallPostsList } from '@/components/wall-posts-list';
import { getUserByUsername } from '@/db_methods/methods';


const UserPage = async ({params}:{params: {username: string}}) => {
  const user_id = "200005"; // TODO
  const user_info = await getUserByUsername(params.username);
  return (    
    <div className='w-full h-full flex flex-col'>
        <div className='bg-gray-300 max-w-96 h-full max-h-96 min-h-56 m-16 mb-0 overflow-hidden rounded-t-2xl relative'>
          <img 
          src="https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" 
          className='bg-cover overflow-clip object-cover rounded-t w-full h-full absolute' />
          <div className='flex'>
            <img
            // src="https://www.film.ru/sites/default/files/people/1456176-2225954.jpeg"
            src={user_info.avatar_url}
            className='w-40 h-40 object-cover absolute z-10 bottom-4 left-6 rounded-full border-4  border-gray-900'/>
            <p className='absolute z-10 bottom-24 left-48 text-white font-sans text-lg'>{user_info.first_name} {user_info.last_name}</p>
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

          <WallPostsList user_id={user_id}/>

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

export default UserPage;
