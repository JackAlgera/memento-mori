import {MementoMori, Week, Year} from '../_models/models';

const COUNT_WEEKS = 52;
const COUNT_YEARS = 80;

const BIRTHDAY = new Date('1995-01-01');

const getYear = (offset: number) : Date => {
  const year = new Date(BIRTHDAY.getTime());
  year.setFullYear(year.getFullYear() + offset);
  return year;
};

export const MEMENTO_MORI_MOCK: MementoMori = {
  years: new Array(COUNT_YEARS).fill(0).map((_, yearIndex) => {
    return {
      yearIndex: yearIndex,
      date: getYear(yearIndex),
      weeks: new Array(COUNT_WEEKS).fill(0).map((_, weekIndex) => {
        return {
          weekNumber: weekIndex,
          date: new Date(BIRTHDAY.getTime() + yearIndex * 365 * 24 * 60 * 60 * 1000 + weekIndex * 7 * 24 * 60 * 60 * 1000),
          isChecked: yearIndex < 29 || (yearIndex == 29 && weekIndex < 10),
          messages: []
        } as Week;
      })
    } as Year;
  })};

MEMENTO_MORI_MOCK.years[29].weeks[10].messages = ['Something cool happened!', 'You are born!'];
MEMENTO_MORI_MOCK.years[29].weeks[9].messages = ['Oh snap, this was such a cool week', 'In your life!'];
MEMENTO_MORI_MOCK.years[29].weeks[8].messages = ['Dang son!'];
