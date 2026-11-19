/*
DIP - Dependency Inversion Principle:
  - modules of higher level of hierarchy shouldn't depend on low-level modules
  - all dependencies in a system should be built on abstraction basis
  - abstraction should NOT depend on details of implementation
  - details of implementation should depend on abstraction
*/

import { AccountingReportGenerator } from './AccountingReportGenerator';
import { Transaction } from './Transaction';

class JSONFileStorage {
  constructor(filename: string) {}

  readFromJSON(): Transaction[] {
    return [];
  }
}

class CSVFileStorage {
  constructor(fileName: string) {}

  readFromCSV() {
    return [];
  }
}

// High-level module (application or its page):
// Now `App` depends on `JSONFileStorage` and `AccountingReportGenerator`. Violation of DIP.
class App {
  printReport() {
    const storage = new JSONFileStorage('transaction.json');
    const transactions = storage.readFromJSON();

    const reportGenerator = new AccountingReportGenerator(transactions);
    const report = reportGenerator.getMonthly();

    console.log(report);
  }
}