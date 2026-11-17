/*
OCP - Open Closed Principle
  - classes should be open for enlargement, but closed for modification
*/

import { ReportGenerator, ReportTypes } from './ReportGenerator';
import { Transaction } from './Transaction';

function printReport() {
  const transactions: Transaction[] = []; // read from DB

  // Accounting report
  const accountingReportGenerator = new ReportGenerator(
    transactions,
    ReportTypes.ACCOUNTING,
  );

  console.log(
    accountingReportGenerator.getQuaterly(),
    accountingReportGenerator.getAnnual(),
  );

  // Investors report
  const investorsReportGenerator = new ReportGenerator(
    transactions,
    ReportTypes.INVESTORS,
  )

  console.log(
    investorsReportGenerator.getMonthly(),
    investorsReportGenerator.getAnnual(),
  );
}
