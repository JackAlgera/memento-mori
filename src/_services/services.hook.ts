import {MEMENTO_MORI} from '../../_mocks/mocks';
import {MementoMori, Year} from '../../_models/models';

export const useGetGlobalYears = () : MementoMori => {
  return MEMENTO_MORI;
};

export const useGetYear = (year: number) : Year => {
  return MEMENTO_MORI.years[year];
};
