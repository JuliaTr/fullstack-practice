/*
Create a `createSentence` function that:

1 Converts an array of words into a single string.
2. Inserts `and` between the last two words.
3. Separates every other word with a comma, followed by a space `, `.

If the array is empty, return an empty string.
*/

// Debugged
function cleanedWords(words: string[]): string[] {
  let cleanedWords: string[] = [];

  for (const word of words) {
    if (word === '') {
      continue;
    }

    cleanedWords.push(word);
  }

  return cleanedWords;
}

function createSentence(words: string[]): string | string[] {
  // Cleaned array from empty strings
  const cleanWords: string[] = cleanedWords(words);

  if (cleanWords.length === 0) {
    return '';
  }

  return cleanWords;
}

console.log(createSentence(['Michael', 'Carolyn', 'Roger'])); 
// 'Michael, Carolyn and Roger'

console.log(createSentence(['Michael', '', '', 'Carolyn']));
// 'Michael and Carolyn'

console.log(createSentence(['', 'Michael', '']));
// 'Michael'

console.log(createSentence(['', '', ''])); // ''


// `Function 'createSentence' should ignore empty strings in array input`
console.log(createSentence(
  ['Lord', 'Adam', '', '', 'Jenny', '', '', 'Rick', '', '']
)); // Lord, Adam, Jenny and Rick


console.log(createSentence(
  ['Jane J. Moran', 'Frances J. Dunleavy', '', 'Amanda J. Taylor', 'Robert J. Greene', '', '', '', '']
));
// 'Jane J. Moran, Frances J. Dunleavy, Amanda J. Taylor and Robert J. Greene'




// // Solution
// function createSentence(words: string[]): string {
//   let sentence: string = '';
//   const lastIdx: number = words.length - 1;
//   let idx: number = 0;

//   while (idx < words.length) {
//     const word: string = words[idx];

//     if (word === '') {
//       idx++;
//       continue;
//     }

//     if (idx === 0 || sentence === '') {
//       sentence += word;
//       idx++;
//       continue;
//     }

//     if (idx === lastIdx) {
//       sentence += ` and ${word}`;
//     }
    
//     if (idx > 0 && idx < lastIdx) {
//       sentence += `, ${word}`;
//     }

//     idx++;
//   }

//   return sentence;
// }

// console.log(createSentence(['Michael', 'Carolyn', 'Roger'])); 
// // 'Michael, Carolyn and Roger'

// console.log(createSentence(['Michael', '', '', 'Carolyn']));
// // 'Michael and Carolyn'

// console.log(createSentence(['', 'Michael', '']));
// // 'Michael'

// console.log(createSentence(['', '', ''])); // ''
