import {MementoMori, Week} from '../_models/models';

const COUNT_WEEKS = 52;
const COUNT_YEARS = 80;

const FULL_YEAR = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1
];

const EMPTY_YEAR = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
];

const GLOBAL = [
  FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR,
  FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR,
  FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR,
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0,0
  ],
  EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR,
  EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR,
  EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR,
  EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR,
  EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR, EMPTY_YEAR,
];

export const MEMENTO_MORI: MementoMori = {
  years: GLOBAL.map((year: number[], index) => (
    {
      weeks: year.map((checked, index) => ({isChecked: checked === 1, week: index} as Week)),
      year: index
    }))
};

