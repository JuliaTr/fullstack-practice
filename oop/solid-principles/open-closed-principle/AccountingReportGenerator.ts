import { AbstractReportGenerator } from "./AbstractReportGenerator";
import { TransactionStatistics } from "./TransactionStatistics";

export class AccountingReportGenerator extends AbstractReportGenerator {
  getMonthly(date = new Date()): string {
    const stats = new TransactionStatistics(this.transactions);
    const income = stats.getTotalIncome();
    const month = this.getMonthName(date);

    return `
      Accounting report.
      ${month} ${date.getFullYear()}.
      Income: ${income}.
    `
  }

  getQuarterly(): string {
    return '...';
  }

  getAnnual(): string {
    return '...';
  }
}