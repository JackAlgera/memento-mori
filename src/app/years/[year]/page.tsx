'use client';

import {useWeeksApi, useYearsApi} from '@/_services/services.hook';
import {useEffect, useState} from 'react';
import {Week, Year} from '../../../../_models/models';
import {useRouter} from 'next/navigation';
import {isDatePast} from '@/_services/utilities.service';
import {WeekDisplay} from '@/_components/week/week-display';

export default function Page({ params }: { params: { year: number } }) {
  const router = useRouter();
  const [year, setYear] = useState<Year>();

  const { getYear } = useYearsApi();
  const { checkWeek } = useWeeksApi();

  useEffect(() => {
    setYear(getYear(params.year));
  }, []);

  const onWeekClick = (week: Week) => {
    if (!isDatePast(week.date)) {
      return;
    }

    if (!week.isChecked) {
      checkWeek(params.year, week.weekNumber);
      setYear(getYear(params.year));
    }
  };

  const getFillColor = (week: Week) => {
    if (week.isChecked) {
      return 'var(--color-2)';
    }
    if (isDatePast(week.date)) {
      return 'var(--color-3)';
    }

    return 'var(--color-1)';
  };

  if (!year) {
    return <></>;
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <button onClick={() => router.push('/')} className='m-4'>Back</button>
      <div className='flex flex-col rounded-lg bg-[var(--color-5)] p-2 gap-1'>
        <h1>{year.date.getFullYear()}</h1>
        {new Array(6).fill(0).map((_, index) => (
          <div className='flex flex-row gap-1 hover:cursor-pointer' key={`row-${index}`}>
            {year.weeks.slice(index * 10, (index + 1) * 10).map((week, weekIndex) => (
              <div className='w-8' key={`week-${weekIndex}`}>
                <WeekDisplay color={getFillColor(week)} onClick={() => onWeekClick(week)}/>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='flex flex-col rounded-lg bg-[var(--color-5)] p-2 gap-1 min-w-[800px] min-h-[300px]'>

      </div>
    </div>
  );
}
