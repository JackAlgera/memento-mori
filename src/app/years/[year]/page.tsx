'use client';

import {MEMENTO_MORI} from '../../../../_mocks/mocks';
import {WeekContainer} from '@/app/week-container';

const YEAR = MEMENTO_MORI.years[29];

export default function Page({ params }: { params: { year: number } }) {

  const year = YEAR;
  console.log('Year', params.year);
  console.log(year);
  return (
    <div className='flex flex-col items-center'>
      {new Array(4).fill(0).map((_, index) => (
        <div className='flex flex-row' key={`row-${index}`}>
          {year.weeks.slice(index * 13, (index + 1) * 13).map((week, weekIndex) => (
            <WeekContainer key={`week-${weekIndex}`} week={week} />
          ))}
        </div>
      ))}
    </div>
  );
}
