/*
Create a `createSentence` function that:

1 Converts an array of words into a single string.
2. Inserts `and` between the last two words.
3. Separates every other word with a comma, followed by a space `, `.

If the array is empty, return an empty string.
*/

function createSentence(words: string[]): string {
  let sentence: string = '';
  const lastIdx: number = words.length - 1;
  let idx: number = 0;

  while (idx < words.length) {
    const word: string = words[idx];

    if (word === '') {
      idx++;
      continue;
    }

    if (idx === 0 || sentence === '') {
      sentence += word;
      idx++;
      continue;
    }

    if (idx === lastIdx) {
      sentence += ` and ${word}`;
    }
    
    if (idx > 0 && idx < lastIdx) {
      sentence += `, ${word}`;
    }

    idx++;
  }

  return sentence;
}

console.log(createSentence(['Michael', 'Carolyn', 'Roger'])); 
// 'Michael, Carolyn and Roger'

console.log(createSentence(['Michael', '', '', 'Carolyn']));
// 'Michael and Carolyn'

console.log(createSentence(['', 'Michael', '']));
// 'Michael'

console.log(createSentence(['', '', ''])); // ''
