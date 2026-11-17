import { Transaction } from './Transaction';

export class TransactionStatistics {
  constructor(
    private transactions: Transaction[],
  ) {}

  getTotalIncome() {
    let total = 0;

    for (const transaction of this.transactions) {
      total += transaction.amount;
    }

    return total;
  }
}
