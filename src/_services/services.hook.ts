import {MEMENTO_MORI_MOCK} from '../../_mocks/mocks';
import {MementoMori, Week, Year} from '../../_models/models';
import {useState} from 'react';

export const useYearsApi = () => {
  const getYear = (year: number) : Year => {
    return {...MEMENTO_MORI_MOCK.years[year]};
  };

  const getMementoMori = () : MementoMori => {
    return {...MEMENTO_MORI_MOCK};
  };

  return { getMementoMori, getYear};
};

export const useWeeksApi = () => {
  const checkWeek = (year: number, week: number) => {
    MEMENTO_MORI_MOCK.years[year].weeks[week].isChecked = true;
  };

  return {checkWeek};
};
