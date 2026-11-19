import { Transaction } from './Transaction';

// Each class is responsible for a specific method
export interface MonthlyReportGenerator {
  getMonthly(date?: Date): string;
}

export abstract class ReportGenerator {
  constructor(
    protected transactions: Transaction[],
  ) {}

  getMonthName(date: Date): string {
    return date.toLocaleString('default', { month: 'long'});
  }
}
