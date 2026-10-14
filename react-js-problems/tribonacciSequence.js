/*
Tribonacci was Fibonacci's lesser-known cousin. Instead of two, he used three numbers to create an entire sequence — e.g.:

- Starting with `[1, 1, 1]`, the sequence goes `[1, 1, 1, 3, 5, 9, 17, 31, ...]`.
- But starting with `[0, 0, 1]`, it shifts one step `[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]`

Create a function `getTribonacciSequence` that:

1. Takes an array of three non-negative integers `start` and a non-negative integer `n`.
2. Returns the first `n` elements of the Tribonacci sequence, including the start. If `n = 0`, it should return an empty array.
*/

function getTribonacciSequence(start, n) {
  const numbers = [];

  for (let i = 0; i < n; i++) {
    if (i <= 2) {
      numbers.push(start[i]);
      continue;
    }

    const lastNum = numbers[numbers.length - 1];
    const previous3Numbers = numbers.slice(
      numbers.length - 3, numbers.length - 1,
    );

    previous3Numbers.push(lastNum);

    const tribNum = previous3Numbers.reduce(
      (sum, currentValue) => sum + currentValue, 
      0,
    );

    numbers.push(tribNum);
  }

  return numbers;
}

console.log(getTribonacciSequence([1, 1, 1], 5));
// [1, 1, 1, 3, 5]

console.log(getTribonacciSequence([1, 2, 3], 8));
// [1, 2, 3, 6, 11, 20, 37, 68]

console.log(getTribonacciSequence([2, 5, 8], 2));
// [2, 5]

console.log(getTribonacciSequence([10, 11, 12], 0));
// []

// Works as expected
