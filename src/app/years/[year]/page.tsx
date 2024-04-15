'use client';

import {useWeeksApi, useYearsApi} from '@/_services/services.hook';
import {useEffect, useState} from 'react';
import {Week, Year} from '../../../../_models/models';
import {useRouter} from 'next/navigation';
import {isDatePast} from '@/_services/utilities.service';
import {WeekDisplay} from '@/_components/week/week-display';
import styles from './page.module.scss';
import {WeekTextsDisplay} from '@/app/years/[year]/week-texts-display';

export default function Page({ params }: { params: { year: number } }) {
  const router = useRouter();
  const [year, setYear] = useState<Year>();
  const [clickedWeek, setClickedWeek] = useState<Week>();

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
    } else {
      setClickedWeek(week);
    }
  };

  const getFillColor = (week: Week) => {
    if (clickedWeek && week.weekNumber === clickedWeek!.weekNumber) {
      return 'var(--color-6)';
    }
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
    <div className='flex flex-col items-center gap-2'>
      <button onClick={() => router.push('/')} className='m-4'>Back</button>
      <div className='flex flex-col rounded-lg bg-[var(--color-5)] p-2 gap-1'>
        <h1>{year.date.getFullYear()}</h1>
        {new Array(6).fill(0).map((_, index) => (
          <div className='flex flex-row gap-1 hover:cursor-pointer' key={`row-${index}`}>
            {year.weeks.slice(index * 10, (index + 1) * 10).map((week, weekIndex) => (
              <div className={`w-8 relative ${styles.wrapper}`} key={`week-${weekIndex}`}>
                <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>{week.weekNumber + 1}</p>
                <WeekDisplay color={getFillColor(week)} onClick={() => onWeekClick(week)}/>
              </div>
            ))}
          </div>
        ))}
      </div>
      <WeekTextsDisplay year={year} week={clickedWeek}/>
    </div>
  );
}
