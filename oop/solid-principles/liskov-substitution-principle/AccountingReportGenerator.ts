import { ReportGenerator } from './ReportGenerator';
import { TransactionStatistics } from './TransactionStatistics';

export class AccountingReportGenerator extends ReportGenerator {
  getMonthly(date = new Date()): string {
    const stats = new TransactionStatistics(this.transactions);
    const income = stats.getTotalIncome();
    const month = this.getMonthName(date);

    return `
      Accounting report.
      ${month} ${date.getFullYear()},
      Income: ${income}.
    `;
  }

  // // We shouldn't print quarter report. `getQuarterly` should be deleted according to LSP. (see more comments in `ReportGenerator`).
  // getQuarterly(date = new Date()): string {
  //   throw new Error("Can't create accounting quarterly report");
  // }

  getAnnual(date = new Date()): string {
    return `Accounting report for ${date.getFullYear()}`;
  }
}
