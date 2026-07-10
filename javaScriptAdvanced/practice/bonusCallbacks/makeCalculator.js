function makeCalculator() {
  let result = 0;

  return {
    get result() {
      return result;
    },

    add(number) {
      result += number;

      return this;
    },

    subtract(number) {
      result -= number;

      return this;
    },

    divide(number) {
      result /= number;

      return this;
    },

    multiply(number) {
      result *= number;

      return this;
    },

    operate(callback, arg) {
      // використання .call() додає прозорості і зрозумілості коду
      // .call() повертає `this`
      return callback.call(this, arg);
    },

    reset() {
      result = 0;

      return this;
    },
  };
}

const calculator = makeCalculator();

calculator.operate(calculator.add, 21)

console.log(calculator.result); // 21

calculator.reset()
console.log(calculator.result); // 0

calculator
  .operate(calculator.add, 10)
  .reset()
  .operate(calculator.subtract, 20)
  .operate(calculator.divide, 5)
  .operate(calculator.multiply, 7)

console.log(calculator.result); // -28

// Works as expected
