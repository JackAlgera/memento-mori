import {MementoMori} from '../../../../_models/models';
import {WeekContainer} from '@/app/week-container';

export interface GlobalViewProps {
  mementoMori: MementoMori;
}

export const GlobalView = (props: GlobalViewProps) => {
  return props.mementoMori.years.map((year, index) => (
    <div key={`year-${index}`} className='flex flex-row'>
      {year.weeks.map((week, index) => (
        <WeekContainer key={`week-${index}`} week={week} />
      ))}
    </div>
  ));
};
