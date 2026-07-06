/*
Create a function `getLongestChain` that:

- Takes a string `word`, containing only lowercase letters — no spaces.
- Returns the length of its longest vowel chain.

Vowels are a, e, i, o, and u.
*/

function findAllVowelsSubstrings(word) {
  const substrings = [];
  let substr = '';

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (char.match(/[aeiou]/)) {
      substr += char;
    }

    if ((!char.match(/[aeiou]/) && substr.length) > 0
        || i === word.length - 1) {
      substrings.push(substr);
      substr = '';
    }
  }

  return substrings;
}

function getLongestChain(word) {
  if (word.length === 0) {
    return 0;
  }

  const substrings = findAllVowelsSubstrings(word);

  const sorted = substrings.sort((str1, str2) => {
    return str2.length - str1.length;
  });

  return sorted[0].length;
}

console.log(getLongestChain('work')); // 1 
// 'o' is the longest vowel chain

console.log(getLongestChain('create')); // 2 
// 'ea' is the longest vowel chain

console.log(getLongestChain('hellooooo')); // 5 
// 'ooooo' is the longest vowel chain

console.log(getLongestChain('js')); // 0 
// 'js' doesn't contain any vowels

console.log(getLongestChain('')); // 0

// Works as expected
