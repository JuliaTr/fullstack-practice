/*
ISP - Interface Segregation Principle
  - classes or modules don't have to implements methods, which they don't use
  - we should break interface down into smaller parts
*/

import { Transaction } from './Transaction';

export abstract class ReportGenerator {
  constructor(
    protected transactions: Transaction[],
  ) {}

  getMonthName(date: Date): string {
    return date.toLocaleString('default', { month: 'long'});
  }

  abstract getMonthly(date?: Date): string;
  abstract getQuarterly(date?: Date): string;
  abstract getAnnual(date?: Date): string;
}
