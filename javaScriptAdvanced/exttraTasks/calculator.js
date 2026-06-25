const calculator = {
  average(...rest) {
    if (rest.length === 0) {
      return 0;
    }

    const sum = rest.reduce((total, num) => total + num, 0);

    return sum / rest.length;
  },
};

console.log(calculator.average()); // 0
console.log(calculator.average(1, 2, 3)); // 2
console.log(calculator.average(-3, -1, 0, 1)); // -0.75
// Works as expected
