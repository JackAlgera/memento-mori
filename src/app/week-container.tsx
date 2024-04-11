import {Week} from '../../_models/models';
import styles from '@/app/week-container.module.scss';

export interface WeekContainerProps {
  week: Week;
}

export const WeekContainer = ({ week }: WeekContainerProps) => {
  const getFillColor = () => {
    if (week.isChecked) {
      return 'black';
    }
    if (week.isCheckable) {
      return 'gray';
    }
    return 'white';
  };

  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 100 100">
        <circle stroke="black" strokeWidth="5" fill={getFillColor()} cx="50" cy="50" r="47.5"/>
      </svg>
    </div>
  );
};
