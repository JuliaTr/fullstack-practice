/*
Create a function formatKey that:

- Accepts a non-empty string key, which represents a license key.
  - `key` cannot be empty.
  - `key` contains only uppercase and lowercase Latin letters, 
  numbers, and dashes ('`-`').
- Accepts a positive integer `k`.
- Reformats the string `key` according to the following rules:
  - All letters and numbers should be divided into groups of 
    `k` length.
  - The first group can be shorter than `k` but still must 
    contain at least one character.
  - All other groups should contain exactly `k` characters.
  - Groups should be separated by dashes.
  - All lowercase letters should be converted to UPPERCASE.
*/

function generateRegroupedSubstrings(cleanedStr, k) {
  const reversedStr = cleanedStr.split('').reverse().join('');
  const regrouped = [];
  let i = 0;

  while (i < reversedStr.length) {
    const substring = reversedStr.slice(i, i + k);

    regrouped.push(substring);
    i += k;
  }

  return regrouped;
}

function formatKey(key, k) {
  // Convert to upper case
  const upcasedStr = key.toUpperCase();
  
  if (upcasedStr.length === k) {
    return upcasedStr;
  }
  
  // Clean string
  const cleanedStr = upcasedStr.split('-').join('');

  // Regroup characters
  const regrouped = generateRegroupedSubstrings(cleanedStr, k);
  const result = regrouped.map((group) => {
    return group.split('').reverse().join('');
  });

  return result.reverse().join('-');
}

console.log(formatKey('5F3Z-2e-9-w', 4)); // '5F3Z-2E9W'
console.log(formatKey('2-5g-3-J', 2)); // '2-5G-3J'
console.log(formatKey('rk-6', 3)); // 'RK6'

console.log(formatKey('h', 1)) // H
console.log(formatKey('la-3-c-93', 6)); // LA3C93
console.log(formatKey('6m-2-er-t4', 8)); // 6M2ERT4
console.log(formatKey('p23-sU-3-2-b6', 1)); // P-2-3-S-U-3-2-B-6

// Should return a string where first group is smaller than 
// k if number of letters and digits in 'key' is not 
// divisible by k:
console.log(formatKey('dk78d-fm3KH-fp370-dG402-k2', 5));
// DK-78DFM-3KHFP-370DG-402K2

console.log(formatKey('DFA2-1FLEM-E4L95-J', 3));
// 'DFA-21F-LEM-E4L-95J'

console.log(formatKey('jdmkd-2ff-1a3hs595', 4)); 
// JDMK-D2FF-1A3H-S595

// Workd as expected
