/*
Create a function `sortString` that:

- Takes a string words where each word contains a single 
  digit (`1` to `9`, no zeros).
- Returns a string with words sorted based on their 
  contained digits, or if `words` are empty — an empty 
  string.
*/

function findInteger(word) {
  for (const char of word) {
    if (char.match(/[0-9]/)) {
      return Number(char);
    }
  }
}

function sortString(words) {
  if (words.length === 0) {
    return '';
  }

  const arrWords = words.split(' ');

  const sorted = arrWords.sort((word1, word2) => {
    const int2 = findInteger(word2);
    const int1 = findInteger(word1);

    return int1 - int2;
  });

  return sorted.join(' ');
}

console.log(sortString('is2 Thi1s T4est 3a'));
// 'Thi1s is2 3a T4est'

console.log(sortString('4of Fo1r pe6ople g3ood th5e the2')); 
// 'Fo1r the2 g3ood 4of th5e pe6ople'

console.log(sortString('')); // ''

// Works as expected
