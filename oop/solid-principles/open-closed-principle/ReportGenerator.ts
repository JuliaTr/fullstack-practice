/*
Here logic can become more complicated. Maybe we'll have several conditions. When we use different types and and conditions, logic can become more complicated. We'll need to do regression testing (test all functional). We need separate classes for each type of report.
*/

import { Transaction } from './Transaction';
import { TransactionStatistics } from './TransactionStatistics';

export enum ReportTypes {
  ACCOUNTING,
  INVESTORS,
  PLANNING,
}

export class ReportGenerator {
  constructor(
    private transactions: Transaction[],
    private type: ReportTypes,
  ) {}

  getMonthly(date = new Date()) {
    const stats = new TransactionStatistics(this.transactions);
    const income = stats.getTotalIncome();
    const month = this.getMonthName(date);

    if (this.type === ReportTypes.ACCOUNTING) {
      return `Accounting report for ${month}. Income: ${income}.`;
    } else if (this.type === ReportTypes.INVESTORS) {
      return `${month} report for Investors. Income: ${income}.`;
    } else if (this.type === ReportTypes.PLANNING) {
      return `${month} report for Planning department. Income: ${income}.`;
    }
  }

  getQuarterly() {
    if (this.type === ReportTypes.ACCOUNTING) {
      return '....';
    } else if (this.type === ReportTypes.INVESTORS) {
      return '....';
    }
  }

  getAnnual() {}

  getMonthName(date: Date) {
    return date.toLocaleString('default', { month: 'long'});
  }
}