/*
OCP - Open Closed Principle
  - classes should be open for enlargement, but closed for modification
  - each class contains only logic which it needs
  - need to test only new functional; there's no need to test all functional, because we didn't change anything in its code
  - lets us simplify code and reduce mistake probability
*/

import { ReportGenerator, ReportTypes } from './ReportGenerator';
import { Transaction } from './Transaction';
import { AccountingReportGenerator } from './AccountingReportGenerator'
// import { InvestorsReportGenerator } from './InvestorsReportGenerator'

function printReport() {
  const transactions: Transaction[] = []; // read from DB

  // Accounting report
  const accountingReportGenerator = new AccountingReportGenerator(transactions);

  console.log(
    accountingReportGenerator.getQuarterly(),
    accountingReportGenerator.getAnnual(),
  );

  // Investors report (expected - example for learning purposes)
  // const investorsReportGenerator = new InvestorsReportGenerator(transactions);

  // console.log(
  //   investorsReportGenerator.getMonthly(),
  //   investorsReportGenerator.getAnnual(),
  // );
}
