export interface MementoMori {
  years: Year[];
}

export interface Year {
  year: number;
  weeks: Week[];
}

export interface Week {
  week: number;
  isChecked: boolean;
  isCheckable: boolean;
}
