import { TransactionStatistics } from './TransactionStatistics';
import { 
  ReportGenerator,
  MonthlyReportGenerator,
} from './ReportGenerator';

export class AccountingReportGenerator 
  extends ReportGenerator
  implements MonthlyReportGenerator
{
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
}
