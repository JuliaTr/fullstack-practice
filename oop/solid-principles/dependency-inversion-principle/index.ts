/*
DIP - Dependency Inversion Principle:
  - modules of higher level of hierarchy shouldn't depend on low-level modules
  - all dependencies in a system should be built on abstraction basis
  - abstraction should NOT depend on details of implementation
  - details of implementation should depend on abstraction
*/

import { AccountingReportGenerator } from './AccountingReportGenerator';
import { MonthlyReportGenerator } from './ReportGenerator';
import { Transaction } from './Transaction';

// If we save data in DB instead of files
interface TransactionStorage {
  getAll(): Transaction[];
} 
class DBStorage implements TransactionStorage {
  constructor(tableName: string) {}

  getAll(): Transaction[] {
    return [];
  }
}

// Here, we save data in files:
abstract class FileStorage implements TransactionStorage {
  abstract getAll(): Transaction[];
}
class JSONFileStorage extends FileStorage {
  constructor(filename: string) {
    super();
  }

  getAll(): Transaction[] {
    return [];
  }
}

class CSVFileStorage extends FileStorage {
  constructor(fileName: string) {
    super();
  }

  getAll(): Transaction[] {
    return [];
  }
}

// High-level module (application or its page):
class App {
  printReport(storage: TransactionStorage, reportGenerator: MonthlyReportGenerator) {
    // Now `App` depends on `JSONFileStorage` and `AccountingReportGenerator`. Violation of DIP.
    // We don't need them anymore
    // const storage = new JSONFileStorage('transaction.json');
    // const transactions = storage.readFromJSON();

    const transactions = storage.getAll();

    // We don't need it anymore
    // const reportGenerator = new AccountingReportGenerator(transactions);

    const report = reportGenerator.getMonthly();

    console.log(report);
  }
}
