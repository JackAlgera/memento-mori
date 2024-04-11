'use client';

import {WeekContainer} from '@/app/week-container';
import {useGetYear} from '@/_services/services.hook';

export default function Page({ params }: { params: { year: number } }) {
  const year = useGetYear(params.year);

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
