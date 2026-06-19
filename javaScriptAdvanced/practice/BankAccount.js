class BankAccount {
  constructor(name, money) {
    this.name = name;
    this.money = money;
    this.historyOfOperations = [`Initial: ${this.money}`];
  }

  getInfo() {
    return `Name: ${this.name}, Amount: ${this.money}`;
  }

  addMoney(amount, info) {
    this.money += amount;
    this.historyOfOperations.push(`${info}: ${amount}`);
  }

  withdrawMoney(amount, info) {
    this.money -= amount;
    this.historyOfOperations.push(`${info}: -${amount}`);
  }

  getAccountHistory() {
    return this.historyOfOperations;
  }
}

const john = new BankAccount('John', 1000);
const matthew = new BankAccount('Matthew', 400);

console.log(john.getInfo()); // 'Name: John, Amount: 1000'

john.addMoney(2000, 'salary');
john.withdrawMoney(500, 'new phone');
console.log(john.getInfo()); // 'Name: John, Amount: 2500'

john.withdrawMoney(500, 'apartment rent');
console.log(john.getInfo()); // 'Name: John, Amount: 2000'

console.log(john.getAccountHistory());
// ['Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

console.log(matthew.getInfo()); // 'Name: Matthew, Amount: 400'
console.log(matthew.getAccountHistory()); // ['Initial: 400']
