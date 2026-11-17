import { Transaction } from './Transaction';
import { TransactionStatistics } from './TransactionStatistics';

export enum ReportTypes {
  ACCOUNTING,
  INVESTORS,
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
    } 
  }

  getQuaterly() {
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