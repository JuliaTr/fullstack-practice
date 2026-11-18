import { ReportGenerator } from './ReportGenerator';
import { AccountingReportGenerator } from './AccountingReportGenerator';

const transactions = []; // read them from DB

printReport(
  new ReportGenerator(transactions)
);

function printReport(reportGenerator: ReportGenerator) {
  console.log('--- Monthly ---');
  console.log(reportGenerator.getMonthly());

  console.log('--- Quaterly ---');
  console.log(reportGenerator.getQuarterly());

  console.log('--- Annual ---');
  console.log(reportGenerator.getAnnual());
}