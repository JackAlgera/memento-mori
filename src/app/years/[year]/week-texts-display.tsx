import {Week, Year} from '../../../../_models/models';
import {useEffect, useState} from 'react';
import styles from './week-texts-display.module.scss';
import {useWeeksApi} from '@/_services/services.hook';

export interface WeekTextsDisplayProps {
  year: Year;
  week: Week | undefined;
}

export const WeekTextsDisplay = (props: WeekTextsDisplayProps) => {
  const [texts, setTexts] = useState<string[]>([]);

  const { getWeekTexts } = useWeeksApi();

  useEffect(() => {
    if (!props.week) {
      return;
    }
    setTexts(getWeekTexts(props.year.yearIndex, props.week.weekNumber));
  }, [props.week]);

  const setOpacity = () => {
    if (props.week) {
      return 'opacity-100';
    } else {
      return 'opacity-0';
    }
  };

  return (
    <div className={`${styles.container} ${setOpacity()} flex flex-col rounded-lg bg-[var(--color-5)] p-2 gap-1 min-w-[800px] min-h-[300px]`}>
      <h2>Week {props.week ? props.week!.weekNumber + 1 : -1}</h2>
      { texts.map((text, index) =>
        <div className='flex gap-1.5' key={`text-${index}`}>
          <div className='w-2 self-center'>
            <svg viewBox='0 0 100 100'>
              <circle cx='50' cy='50' r='45' fill='var(--color-2)'/>
            </svg>
          </div>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};
