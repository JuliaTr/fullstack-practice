/*
Create a function `toPigLatin` that:

1. Takes a string `str` containing only letters (upper- and lowercase), spaces, and punctuation marks.
2. Converts `str` to a simple form of Pig Lating by:
  - Appending `ay` to the end of each word.
  - Keeping punctuation marks unchanged.
3. Returns the modified `str`, where:
  - Punctuation marks are always preceded by a space.
  - Letters retain their original case.
*/

// Refactored
function toPigLatin(str) {
  let newStr = '';
  let tempChar = '';

  for (let idx = 0; idx < str.length; idx++) {
    const char = str[idx];
    const nextChar = str[idx + 1];

    if ((idx === 0 || str[idx - 1].match(/[^a-zA-Z]/)) 
        && (char.match(/[a-zA-Z]/))
    ) {
      tempChar = char;
    } else {
      newStr += char;
    }

    if (char.match(/[a-zA-Z]/) 
        && (nextChar === undefined || nextChar.match(/[^a-zA-Z]/))
    ) {
      newStr += `${tempChar}ay`;
      tempChar = '';
    }
  }

  return newStr;
}

console.log(toPigLatin('code')); // 'odecay'
console.log(toPigLatin('Javascript is fun')); 
// 'avascriptJay siay unfay'

console.log(toPigLatin('Thank you !')); 
// 'hankTay ouyay !'

`should add 'ay' to the word which consists of one letter`

console.log(toPigLatin('d')); // 'day'

// Works as expected




// // Solution
// function toPigLatin(str) {
//   let newStr = '';
//   let tempChar = '';

//   for (let idx = 0; idx < str.length; idx++) {
//     let char = str[idx];
//     let nextChar = str[idx + 1];

//     if (char.match(/[^a-zA-Z]/)) {
//       newStr += char;
//       continue;
//     }

//     if (idx === 0 || str[idx - 1].match(/[^a-zA-Z]/)) {
//       tempChar = char;
//       continue;
//     }

//     if (char.match(/[a-zA-Z]/) && 
//         (nextChar === undefined || nextChar.match(/[^a-zA-Z]/))
//       ) {
//       newStr += `${char}${tempChar}ay`;
//       temp = '';
//     } else {
//       newStr += char;
//     }
//   }

//   return newStr;
// }

// console.log(toPigLatin('code')); // 'odecay'
// console.log(toPigLatin('Javascript is fun')); 
// // 'avascriptJay siay unfay'

// console.log(toPigLatin('Thank you !')); 
// // 'hankTay ouyay !'




// // Draft
// function toPigLatin(str) {
//   let newStr = '';
//   let stopIdx = str.length;
//   let idx = 0;
//   let tempChar = '';

//   while (idx < stopIdx) {
//     console.log('~~~~~~~~~~~~~~~~~~~~~~~~')
//     let char = str[idx];
//     let nextChar = str[idx + 1];

//     console.log(char)

//     if (idx === 0 || str[idx - 1].match(/[^a-zA-Z]/)) {
//       console.log('print1')

//       tempChar = char;
//       idx++;
//       continue;
//     }

//     if (char.match(/[a-zA-Z]/) && 
//         (nextChar === undefined || nextChar.match(/[^a-zA-Z]/) || nextChar === undefined)
//       ) {
//       console.log('print2')

//       newStr += `${char}${tempChar}ay`;
//       temp = '';
//     } else {
//       newStr += char;
//     }
    
//     idx++;
//   }

//   return newStr;
// }

// console.log(toPigLatin('code')); // 'odecay'



// // Experiments:
// // Strings are immutable in JS
// const a = 'Hello';
// a[0] = '-';
// console.log(a) // Hello
