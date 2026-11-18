/*
`AbstractReportGenerator` was created in order not to change code in `ReportGenerator` in learning purposes.
*/

import { Transaction } from './Transaction';

export abstract class AbstractReportGenerator {
  constructor(
    protected transactions: Transaction[],
  ) {}

  getMonthName(date: Date) {
    return date.toLocaleString('default', { month: 'long'});
  }

  abstract getMonthly(date?: Date): string;
  abstract getQuarterly(): string;
  abstract getAnnual(): string;
}
