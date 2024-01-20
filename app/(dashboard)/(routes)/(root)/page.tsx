import React from 'react';
import { SingleDaySchedule } from './_components/single-day-schedule';
import { SimpleStatsModule } from './_components/simple-stats-module';
import { WallsList } from './_components/walls-list';

const MainPage = () => {
  return (
    <>
        <div>
            <SingleDaySchedule />
        </div>
        <div>
            <SimpleStatsModule />
        </div>
        <div>
            <WallsList />
        </div>
    </>
  );
}

export default MainPage;
