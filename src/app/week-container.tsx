import {Week} from '../../_models/models';
import styles from '@/app/week-container.module.scss';

export interface WeekContainerProps {
  week: Week;
}

export const WeekContainer = ({ week }: WeekContainerProps) => {
  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 100 100">
        <circle fill={week.isChecked ? 'black' : 'white' } cx="50" cy="50" r="50"/>
      </svg>
    </div>
  );
};
