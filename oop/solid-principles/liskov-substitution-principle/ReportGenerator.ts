import { Transaction } from './Transaction';
import { TransactionStatistics } from './TransactionStatistics';

export class ReportGenerator {
  constructor(
    protected transactions: Transaction[],
  ) {}

  getMonthly(date = new Date()) {
    const stats = new TransactionStatistics(this.transactions);
    const income = stats.getTotalIncome();
    const month = this.getMonthName(date);

    return `${month} report. Income: ${income}.`;
  }

  getQuarterly(date = new Date()): string {
    return `${this.getQuarterly(date)} quarter report`;
  }

  getAnnual(date = new Date()): string {
    return `${date.getFullYear()} report`;
  }

  protected getMonthName(date: Date): string {
    return '';
  }

  protected getquarter(date: Date): string {
    return '';
  }
}
