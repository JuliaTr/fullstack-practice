/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Write a function `sumInRow` that calculates the sum of the 
numbers in the nth row of this triangle (starting at 
index 1).
*/

// Runtime optimized
function generateAllNumbersFromInput(n) {
  const allNumbers = [];
  let i = 1;

  while (allNumbers.length !== n) {
    allNumbers.push(i);
    i++;
  }

  return allNumbers;
}

function calculateTotal(numbers) {
  return numbers.reduce((sum, currentEl) => sum + currentEl, 0);
}

function generateAllOdds(total) {
  const allOddNumbers = [];
  let i = 1;

  while (allOddNumbers.length !== total) {
    allOddNumbers.push(i);
    i += 2;
  }

  return allOddNumbers;
}

function sumInRow(n = 0) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  const allNumbers = generateAllNumbersFromInput(n);
  const total = calculateTotal(allNumbers);
  const allOddNumbers = generateAllOdds(total);
  console.log(allOddNumbers)

  // Calculate sum for the last `n` odds (row)
  const startIdx = allOddNumbers.length - n;
  const row = allOddNumbers.slice(startIdx);
  const sumRow = calculateTotal(row);

  return sumRow;
}

// console.log(sumInRow(1)); // 1
// console.log(sumInRow(2)); // 8 // 3 + 5 = 8
// console.log(sumInRow(3)); // 7 + 9 + 11
// console.log(sumInRow(4)); // 13 + 15 + 17 + 19

console.log(sumInRow(42)); // 74088
// console.log(sumInRow(100)); // 1000000

// console.log(sumInRow()); // 0
// console.log(sumInRow(-4)); // 0




// Solution
function generateAllNumbersFromInput(n) {
  const allNumbers = [];
  let i = 1;

  while (allNumbers.length !== n) {
    allNumbers.push(i);
    i++;
  }

  return allNumbers;
}

function calculateTotal(numbers) {
  return numbers.reduce((sum, currentEl) => sum + currentEl, 0);
}

function generateAllOdds(total) {
  const allOddNumbers = [];
  let i = 1;

  while (allOddNumbers.length !== total) {
    allOddNumbers.push(i);
    i += 2;
  }

  return allOddNumbers;
}

function sumInRow(n = 0) {
  if (n <= 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  // Generate numbers from 1 to `n` inclusive.
  const allNumbers = generateAllNumbersFromInput(n);

  // Calculate som for generated numbers
  const total = calculateTotal(allNumbers);

  // Generate all odd numbers from 1 to total (length of new array)
  const allOddNumbers = generateAllOdds(total);

  // Calculate sum for the last `n` odds (row)
  const startIdx = allOddNumbers.length - n;
  const row = allOddNumbers.slice(startIdx);
  const sumRow = calculateTotal(row);

  return sumRow;
}

console.log(sumInRow(1)); // 1
console.log(sumInRow(2)); // 8 // 3 + 5 = 8
console.log(sumInRow(3)); // 7 + 9 + 11
console.log(sumInRow(4)); // 13 + 15 + 17 + 19

console.log(sumInRow(42)); // 74088
console.log(sumInRow(100)); // 1000000

// `should return zero if the number of row is not passed`
console.log(sumInRow()); // 0

// `should return zero for all negative numbers`
console.log(sumInRow(-4)); // 0

// Works as expected
