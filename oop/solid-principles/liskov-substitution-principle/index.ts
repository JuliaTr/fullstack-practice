/*
LSP - Liskov Substitution Principle
  - any code which works wirh object of a certian class should work without changes properly with ancestors of this class
  - uses polymorphism, basing only on what we have in parent class
  - ancestors shouldn't create additional limitations comparing with parent class
  - limitations can be weaker in ancestor class or the same as in parent class
  - ancestor doesn't have a right to demand more arguments in a method or return another data type
  - we should implement and support all methods in parent class
*/

import { ReportGenerator } from './ReportGenerator';
import { AccountingReportGenerator } from './AccountingReportGenerator';
import { Transaction } from './Transaction';

const transactions: Transaction[] = []; // read them from DB

printReport(
  new AccountingReportGenerator(transactions)
);

function printReport(reportGenerator: ReportGenerator) {
  console.log('--- Monthly ---');
  console.log(reportGenerator.getMonthly());

  // Should be deleted according to LSP.
  // console.log('--- Quaterly ---');
  // console.log(reportGenerator.getQuarterly());

  console.log('--- Annual ---');
  console.log(reportGenerator.getAnnual());
}