import {MementoMori} from '../../../../_models/models';
import {WeekContainer} from '@/app/week-container';

export interface GlobalViewProps {
  mementoMori: MementoMori;
  onYearClick: (year: number) => void;
}

export const GlobalView = (props: GlobalViewProps) => {
  return props.mementoMori.years.map((year, index) => (
    <div onClick={() => props.onYearClick(index)} key={`year-${index}`} className='flex flex-row'>
      {year.weeks.map((week, index) => (
        <WeekContainer key={`week-${index}`} week={week} />
      ))}
    </div>
  ));
};
