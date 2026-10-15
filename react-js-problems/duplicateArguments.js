/*
Create a function `detectDuplicates` that:

1. Takes any number of arguments.
2. Returns `true` if any arguments are duplicates, otherwise `false`.

Said function can take strings, numbers, booleans, `null` and `undefined`.
*/

function detectDuplicates() {
  const frequencies = {};

  for (const value of arguments) {
    if (frequencies[value]) {
      frequencies[value] += 1;
    } else {
      frequencies[value] = 1;
    }
  }

  return frequencies;
}

console.log(detectDuplicates(1, 2, 3)); // false
console.log(detectDuplicates(1, 2, 'a', 1)); // true
console.log(detectDuplicates(true, true, false)); // true
console.log(detectDuplicates(undefined, null, 0)); // false
