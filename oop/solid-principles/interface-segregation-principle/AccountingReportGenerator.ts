import { TransactionStatistics } from "./TransactionStatistics";
import { ReportGenerator } from "./ReportGenerator";

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

  // Violation of ISP. We don't need to create quarter report, but we had to create ths method and return smth. because of `ReportGenerator` requirements. 
  getQuarterly(date?: Date): string {
    return '';
  }

  getAnnual(date = new Date()): string {
    return `Accounting report for ${date.getFullYear()}.`;
  }
}\