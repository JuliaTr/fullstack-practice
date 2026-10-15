/*
Create a function `detectDuplicates` that:

1. Takes any number of arguments.
2. Returns `true` if any arguments are duplicates, otherwise `false`.

Said function can take strings, numbers, booleans, `null` and `undefined`.
*/

const DUPLICATE = 2;

function calculateFrequencies(args) {
  const frequencies = {};

  for (const value of args) {
    let newValue = value;
    const isString = value === String(newValue);

    if (isString) {
      newValue = '_' + newValue;
    }

    if (frequencies[newValue]) {
      frequencies[newValue] += 1;
    } else {
      frequencies[newValue] = 1;
    }
  }

  return frequencies;
}

function detectDuplicates() {
  const frequencies = calculateFrequencies(arguments);
  const values = Object.values(frequencies);

  return values.includes(DUPLICATE);
}

console.log(detectDuplicates(1, 2, 3)); // false
console.log(detectDuplicates(1, 2, 'a', 1)); // true
console.log(detectDuplicates(true, true, false)); // true
console.log(detectDuplicates(undefined, null, 0)); 
// false

// `should work with numbers and number strings`
console.log(detectDuplicates(1, 2, 3, '1', '2', '3')); 
// false

// Works as expected
