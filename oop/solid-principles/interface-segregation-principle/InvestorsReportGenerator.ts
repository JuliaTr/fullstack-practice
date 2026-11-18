import { TransactionStatistics } from './TransactionStatistics';
import { ReportGenerator } from './ReportGenerator';

export class InvestorsReportGenerator extends ReportGenerator {
  getMonthly(date = new Date()): string {
    const stats = new TransactionStatistics(this.transactions);
    const income = stats.getTotalIncome();
    const month = this.getMonthName(date);

    return `
      ${month} report for Investors.
      Income: ${income}.
    `;
  }

  getQuarterly() {
    return '...';
  }

  getAnnual() {
    return '...';
  }
}
