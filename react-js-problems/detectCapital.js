/*
Create a function detectCapital that:

1. Takes a single word and checks if its capitalization follows one of the following rules:
- All uppercase — all letters are uppercase, e.g.: `NATO`.
- All lowercase — all letters are lowercase, e.g.: `code`.
- Capitalized — only the first letter is uppercase, e.g.: `World`.
- Numbers and special characters — if a word starts with a number or a special character, all other letters should consistently be either upper- or lowercase.

2. Return `true` if the word follows any of these rules, otherwise false.
3. If the input is empty or only contains spaces, returns "Enter a word here".
4. If the input contains multiple words, returns "Enter one word at a time".
5. Ignores leading and trailing spaces.
*/

function detectCapital(word) {
  const trimmedWord = word.trim();

  if (trimmedWord === '') {
    return 'Enter a word here';
  }

  if (trimmedWord.split(' ').length > 1) {
    return 'Enter one word at a time';
  }

  if (trimmedWord.toUpperCase() === trimmedWord) {
    return true;
  }

  if (trimmedWord.toLowerCase() === trimmedWord) {
    return true;
  }

  if (trimmedWord[0].toUpperCase() === trimmedWord[0]
      && trimmedWord.slice(1).toLowerCase() === trimmedWord.slice(1)
  ) {
    return true;
  }

  return false;
}

console.log(detectCapital('UK')); // true 
console.log(detectCapital('Mate')); // true 
console.log(detectCapital('enTeR')); // false
console.log(detectCapital('1ondon')); // true
console.log(detectCapital('two words')); // 'Enter one word at a time'
console.log(detectCapital(' test    ')); // true
console.log(detectCapital('')); // 'Enter a word here'

// Works as expected