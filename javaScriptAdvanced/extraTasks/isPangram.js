/*
Detect pangram

Create the function isPangram that:

Takes a string str.
Returns true, if str is a pangram, otherwise — false.
💡 A pangram is a sentence that includes every letter of the alphabet at least once, regardless of case, like 'The quick brown fox jumps over the lazy dog'.
*/

// Optimized solution
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function isPangram(str) {
  const letters = new Set(str.toLowerCase());

  for (const letter of ALPHABET) {
    if (!letters.has(letter)) return false;
  }

  return true;
}

console.log(
  isPangram('abcdefghijklmnopqrstuvwxyz')
); // === true

console.log(
  isPangram('Sphinx of black quartz, judge my vow.')
); // === true

console.log(
  isPangram('AbCdEfGhIjKlMzxWvUtSrQpOn')
); // === false // 'y' is missing

console.log(isPangram('Detect Pangram')); //=== false 




// Solution
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

function isPangram(str) {
  const strLowerCase = str.toLowerCase();

  for (const letter of ALPHA) {
    if (!strLowerCase.includes(letter)) return false;
  }

  return true;
}

console.log(
  isPangram('abcdefghijklmnopqrstuvwxyz')
); // === true

console.log(
  isPangram('Sphinx of black quartz, judge my vow.')
); // === true

console.log(
  isPangram('AbCdEfGhIjKlMzxWvUtSrQpOn')
); // === false // 'y' is missing

console.log(isPangram('Detect Pangram')); //=== false 
