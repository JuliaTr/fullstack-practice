/*
SRP - Single Responsibility Principle:
  - method, class, module should be responsible for execution of one and only one business task and encapsulate everything necessary for its execution
  - one class or method can have only one reason for change
*/

import { ReportGenerator } from './ReportGenerator';
import { Transaction } from './Transaction';
import { TransactionStatistics } from './TransactionStatistics';

function printAccountingReport() {
  const transactions: Transaction[] = []; // read them from DB
  const reportGenerator = new ReportGenerator(transactions);

  console.log('\n-- Accounting -- ');
  console.log(reportGenerator.getMonthly());
}

function getNextMonthPlan() {
  const transactions: Transaction[] = []; // read them from DB
  const stats = new TransactionStatistics(transactions);
  const currentIncome = stats.getTotalIncome();

  console.log('Goal: ', 1.2 * currentIncome);
}

function printInvestorsReport() {
  const transactions: Transaction[] = []; // read them from DB
  const reportGenerator = new ReportGenerator(transactions);

  console.log('\n-- Investors --');
  console.log(reportGenerator.getMonthly());
}
