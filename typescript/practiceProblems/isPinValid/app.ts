/*
Create a function `isPinValid` that:

1. Accepts a string `pin`.
2. Checks whether it represents a valid PIN code.
  - PIN codes can contain only digits.
  - PIN codes must have a length of `4` or `6` characters.
3. Returns `true` if `pin` represents a valid PIN code, otherwise, returns `false`.
*/

/**
 * @param {string} pin
 *
 * @returns {boolean}
 */
function isPinValid(pin: string): boolean {
  let count: number = 0;

  for (const char of pin) {
    if (char.match(/[0-9]/)) {
      count += 1;
    } else {
      return false;
    }
  }

  return count === 4 || count === 6;
}

console.log(isPinValid('1234')); // true
console.log(isPinValid('098765')); // true
console.log(isPinValid('123')); // false
console.log(isPinValid('12345')); // false
console.log(isPinValid('1234567')); // false
console.log(isPinValid('-1234')); // false
console.log(isPinValid('1.234')); // false
console.log(isPinValid('123e')); // false

// Works as expected
