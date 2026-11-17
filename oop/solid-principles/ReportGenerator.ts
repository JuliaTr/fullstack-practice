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

    // Posible solution if we need to generate a report for invastors. Code will be more complicated, less readable, errors prone. Better to move it to another class like for reports for accountants, and another class for reports for investors. Basic logic can be left in parent `ReportGenerator` class. Classes fot reports for accountants and investors can inherit it. This way we'll eliminate need to write conditions for different types of reports.

    // let report = '';

    // if (this.type === 'accounting') {
    //   report += ' Accounting details.';
    // } else if (this.type === 'investors') {
    //   report += ' Investors details.';
    // }
  }
}