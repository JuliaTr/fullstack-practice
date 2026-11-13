/*
Create a function `fixAlphabet` that:

1. Takes a distorted string `str`.
2. Fixes the `str` per below rules:
  - Each letter is replaced with the preceding letter in the alphabet (e.g., `b` with `a`, `K` with `I`...).
  - `a` is replaced with `Z`, and `A` - with `z`
  - Numbers, special characters and spaces shouldn't be modified
3. Returns the fixed `str`, or if the input isn't a string — returns the message `'Input is not a string'`.
*/

const ALPHA = 'abcdefghijklmnopqrstuvwzyz';

function fixAlphabet(str) {
  if (str !== String(str)) {
    return 'Input is not a string';
  }

  let result = '';

  for (const char of str) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
    
    const asciiValue = char.charCodeAt(0);
    console.log(asciiValue);

    result += String.fromCharCode(asciiValue - 1);
  }

  return result;
}

console.log(fixAlphabet('abA')); // 'Zaz'
// console.log(fixAlphabet('Ifmmp xpsme!')); // 'Hello world!'
// console.log(fixAlphabet(12)); // 'Input is not a string'
