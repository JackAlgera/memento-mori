'use client';

import {useYearsApi} from '@/_services/services.hook';
import {useEffect, useState} from 'react';
import {MementoMori, Week} from '../../_models/models';
import {useRouter} from 'next/navigation';
import {WeekDisplay} from '@/_components/week/week-display';
import {isDatePast} from '@/_services/utilities.service';
import styles from './page.module.scss';

export default function Home() {
  const router = useRouter();
  const { getMementoMori } = useYearsApi();
  const [mementoMori, setMementoMori] = useState<MementoMori>();

  useEffect(() => {
    setMementoMori(getMementoMori());
  }, []);

  const onYearClick = (year: number) => {
    router.push(`/years/${year}`);
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

  if (!mementoMori) return (<></>);

  return (
    <div className='flex flex-col rounded-lg bg-[var(--color-5)] p-2 gap-0.5'>
      {mementoMori.years.map((year, index) => (
        <div key={`year-${index}`}
             onClick={() => onYearClick(index)}
             className='flex flex-row gap-0.5 hover:cursor-pointer'>
          {year.weeks.map((week, index) => (
            <WeekDisplay key={`week-${index}`} color={getFillColor(week)}/>
          ))}
        { index % 5 === 0 && <p className={`absolute ${styles.yearText}`}>{year.date.getUTCFullYear()}</p> }
        </div>
      ))}
    </div>
  );
}
