/*
ISP - Interface Segregation Principle
  - classes or modules don't have to implement methods, which they don't use
  - we should break interface down into smaller parts
*/

import { Transaction } from './Transaction';

// Each class is responsible for a specific method
export interface MonthlyReportGenerator {
  getMonthly(date?: Date): string;
}

export interface QuarterlyReportGenerator {
  getQuarterly(date?: Date): string;
}

export interface AnnualReportGenerator {
  getAnnual(date?: Date): string;
}
export abstract class ReportGenerator {
  constructor(
    protected transactions: Transaction[],
  ) {}

  getMonthName(date: Date): string {
    return date.toLocaleString('default', { month: 'long'});
  }

  // We need to reorganise interface according to ISP
//   abstract getMonthly(date?: Date): string;
//   abstract getQuarterly(date?: Date): string;
//   abstract getAnnual(date?: Date): string;
}
