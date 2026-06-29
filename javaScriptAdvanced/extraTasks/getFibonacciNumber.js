function getFibonacciNumber(n) {
  let fibNum = n;
  const numbers = [];

  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      numbers.push(i);
      continue;
    }

    const lastNum = numbers[numbers.length - 1];
    const beforelastNum = numbers[numbers.length - 2];
  
    fibNum = lastNum + beforelastNum;

    numbers.push(fibNum);
  }


  return numbers[numbers.length - 1];
}

console.log(getFibonacciNumber(0)); // 0
console.log(getFibonacciNumber(1)); // 1
console.log(getFibonacciNumber(2)); // 1   // 1 + 0
console.log(getFibonacciNumber(3)); // 2   // 1 + 1
console.log(getFibonacciNumber(4)); // 3  // 2 + 1
console.log(getFibonacciNumber(5)); // 5  // 3 + 2
// Works as expected
