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
  FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR, FULL_YEAR,
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
  EMPTY_YEAR, EMPTY_YEAR
];

const NOW = new Date();
const BIRTHDAY = new Date('1995-01-01');

export const MEMENTO_MORI: MementoMori = {
  years: GLOBAL.map((year: number[], yearIndex) => (
    {
      weeks: year.map((checked, index) => ({
        isChecked: checked === 1,
        week: index,
        isCheckable: new Date(BIRTHDAY.getFullYear() + yearIndex, 0, 1) < NOW
      } as Week)),
      year: yearIndex
    }))
};

