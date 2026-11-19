/*
DIP - Dependency Inversion Principle:
  - modules of higher level of hierarchy shouldn't depend on low-level modules
  - all dependencies in a system should be built on abstraction basis
  - abstraction should NOT depend on details of implementation
  - details of implementation should depend on abstraction
*/

import { AccountingReportGenerator } from './AccountingReportGenerator';
import { Transaction } from './Transaction';

// If we save data in DB instead of files
class DBStorage {
  
}

// Here, we save data in files:
abstract class FileStorage {
  abstract read(): Transaction[];
}
class JSONFileStorage extends FileStorage {
  constructor(filename: string) {
    super();
  }

  read(): Transaction[] {
    return [];
  }
}

class CSVFileStorage extends FileStorage {
  constructor(fileName: string) {
    super();
  }

  read(): Transaction[] {
    return [];
  }
}

// High-level module (application or its page):
// Now `App` depends on `JSONFileStorage` and `AccountingReportGenerator`. Violation of DIP.
class App {
  printReport(storage: FileStorage) {
    // We don't need them anymore
    // const storage = new JSONFileStorage('transaction.json');
    // const transactions = storage.readFromJSON();

    const transactions = storage.read();

    const reportGenerator = new AccountingReportGenerator(transactions);
    const report = reportGenerator.getMonthly();

    console.log(report);
  }
}