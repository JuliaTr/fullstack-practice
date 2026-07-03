/*
Write a function `countDuplicates` that accepts a string `str` 
and returns the count of distinct alphabetic characters and 
numeric digits that occur more than once in the input string.

Notes:

- the input string contains only alphabets (both uppercase 
  and lowercase) and numeric digits;
- function should be case-insensitive.
*/
function findAllOccurrences(str) {
  const occurrences = {};

  for (const char of str) {
    if (occurrences[char]) {
      occurrences[char] += 1;
    }

    if (!occurrences[char]) {
      occurrences[char] = 1;
    }
  }

  return occurrences;
}

function countDuplicates(str) {
  const downcased = str.toLowerCase();
  const occurrences = findAllOccurrences(downcased);
  let count = 0;

  for (const value of Object.values(occurrences)) {
    if (value > 1) {
      count += 1;
    }
  }

  return count;
}

console.log(countDuplicates('abcde')); // 0 /
// no characters repeat more than once

console.log(countDuplicates('aabbcde')); // 2 
// 'a' and 'b' occur more than once

console.log(countDuplicates('aA11')); // 2 
// 'a' and '1' occur more than once
