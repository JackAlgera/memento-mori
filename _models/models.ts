export interface MementoMori {
  years: Year[];
}

export interface Year {
  yearIndex: number;
  date: Date;
  weeks: Week[];
}

export interface Week {
  weekNumber: number;
  date: Date;
  isChecked: boolean;
  messages: string[];
}
