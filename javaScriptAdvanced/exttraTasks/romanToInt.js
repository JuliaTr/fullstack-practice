/*
Create a function romanToInt that converts a Roman numeral 
string to an integer. If the input is an empty string, it 
should return 0. Roman numerals use these symbols:

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Roman numerals are usually ordered largest to smallest 
from left to right:

2 is written as II
12 is written as XII (X + II)
27 is written as XXVII (XX + V + II)
But for 4 and 9, subtraction is used instead of repeating symbols:

4 is written as IV (1 before 5)
9 is written as IX (1 before 10)
This pattern extends to larger values:

40 is XL (10 before 50).
90 is XC (10 before 100)
400 is CD (100 before 500)
900 is CM (100 before 1000)
*/

const SYMBOL_VALUE = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function collectValues(symbols) {
  const ints = [];

  for (const symbol of symbols) {
    ints.push(SYMBOL_VALUE[symbol]);
  }

  return ints;
}

function romanToInt(romanNum) {
  const symbols = romanNum.split('');
  const ints = collectValues(symbols);
  let yearNum = 0;
  let usedNextValue = 0;

  for (let i = 0; i < ints.length; i++) {
    const currentValue = ints[i];
    const nextValue = ints[i + 1];

    if (usedNextValue > 0) {
      usedNextValue = 0;
      continue;
    }

    if ((yearNum === 0 || yearNum >= currentValue)
          && (nextValue === undefined || nextValue <= currentValue)) {
      yearNum += currentValue;
    }

    if (nextValue > currentValue) {
      yearNum += nextValue - currentValue;
      usedNextValue = nextValue;
    }
  }

  return yearNum;
}

console.log(romanToInt('III')); // === 3
console.log(romanToInt('XIX')); // === 19
console.log(romanToInt('XXIII')); // === 23
console.log(romanToInt('XLI')); // === 41 
console.log(romanToInt('C')); // === 100
// Works as expected
