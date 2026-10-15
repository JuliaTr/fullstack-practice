/*
Create a function `getHighestValue` that:

1. Takes a string `str` containing only letters from the English alphabet and no spaces.
2. Returns the highest value of the consontant substrings, where:
- Consonants are any letters except for `'aeiou'`.
- Each letter has a value corresponding to its position in the alphabet, e.g...

a = 1
b = 2
c = 3
...
z = 26

For example, let's take the word `'testing'`, which contains three consonant substrings:

't' = 20
'st' = 19 + 20 = 39
'ng' = 14 + 7 = 21

The highest value among the substrings is `39`, so the function should return this exact number.
*/

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function calculateGroupsOfConsonants(str) {
  const consonants = {};
  let temp = '';
  let consonantCount = 0;

  for (let i = 0; i < str.length; i++) {
    // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

    const char = str[i];
    const isConsonant = char.match(/[^aeiou0-9/\W]/gi);

    // console.log('char:', char)
    // console.log('temp:', temp)
    // console.log('consonantCount:', consonantCount)

    if (isConsonant) {
      // console.log('print1')

      temp += char;
      consonantCount += ALPHABET.indexOf(char) + 1;

      // console.log('temp:', temp)
      // console.log('consonantCount:', consonantCount)
    }

    if ((!isConsonant && temp.length > 0) || i + 1 === str.length) {
      // console.log('print2')
      consonants[consonantCount] = temp;
      temp = '';
      consonantCount = 0;
    }
  }

  return consonants;
}

function getHighestValue(str) {
  if (str.length === 0) {
    return 0;
  }

  const consonants = calculateGroupsOfConsonants(str);
  // console.log(consonants)

  const sortedKeys = Object.keys(consonants).sort((a, b) => Number(a) - Number(b));
  // console.log(sortedKeys)

  return Number(sortedKeys[sortedKeys.length - 1]);
}

console.log(getHighestValue('aeuiae')); // 0 
// no consonants

console.log(getHighestValue('d')); // 4 
console.log(getHighestValue('blink')); // 25 
// 'nk' has the highest value, which is 14 + 11 = 25

console.log(getHighestValue('')); // 0 
// no consonants

// `should return the value of a greater consonant if a string contains only two separated consonants`
console.log(getHighestValue('bake')); // 11
