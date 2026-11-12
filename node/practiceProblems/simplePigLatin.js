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

function toPigLatin(str) {
  let stopIdx = str.length - 1;
  let idx = 0;
  let tempChar = '';

  while (idx < stopIdx) {
    let char = str[idx];

    if (idx === 0 || str[idx - 1].match(/[^a-zA-z]/)) {
      tempChar = char;
      char = '';
      stopIdx--;
    }

    if (char.match(/[a-zA-z]/) && str[idx + 1].match(/[^a-zA-z]/)) {
      char = `${char}ay${char}`;
      temp = '';
      stopIdx += 3;
    }
    
    idx++;
  }

  return str;
}

console.log(toPigLatin('code')); // 'odecay'
// console.log(toPigLatin('Javascript is fun')); 
// // 'avascriptJay siay unfay'

// console.log(toPigLatin('Thank you !')); 
// // 'hankTay ouyay !'
