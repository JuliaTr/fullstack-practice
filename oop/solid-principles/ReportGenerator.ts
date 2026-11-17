import { Transaction } from './Transaction';
import { TransactionStatistics } from './TransactionStatistics';

export class ReportGenerator {
  constructor(
    private transactions: Transaction[],
  ) {}

  getMonthName(date: Date) {
    return date.toLocaleString('default', { month: 'long' });
  }

  getMonthly(date = new Date()) {
    const month = this.getMonthName(date);
    const stats = new TransactionStatistics(this.transactions);
    const income = stats.getTotalIncome();

    return `${month} report. Income: ${income}`;
  }
}