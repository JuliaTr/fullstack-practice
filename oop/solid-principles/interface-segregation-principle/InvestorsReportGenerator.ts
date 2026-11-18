import { TransactionStatistics } from './TransactionStatistics';
import { 
  ReportGenerator,
  MonthlyReportGenerator,
  QuarterlyReportGenerator,
  AnnualReportGenerator,
} from './ReportGenerator';

export class InvestorsReportGenerator 
  extends ReportGenerator
  implements
    MonthlyReportGenerator,
    QuarterlyReportGenerator,
    AnnualReportGenerator
{
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
