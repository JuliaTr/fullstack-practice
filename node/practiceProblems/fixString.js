/*
Write a function `fixString` that takes a string `str` that can contain Latin letters (both uppercase and lowercase) and spaces.

Convert that string to either lowercase only or uppercase only based on:
  - make as few changes as possible;
  - if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
*/

function countLetters(str) {
  let lowercaseLetters = 0;
  let uppercaseLetters = 0;
  
  for (const letter of str) {
    if (letter === ' ') {
      continue;
    }

    if (letter === letter.toUpperCase()) {
      uppercaseLetters += 1;
    } else {
      lowercaseLetters += 1;
    }
  }

  return [uppercaseLetters, lowercaseLetters];
}

function fixString(str) {
  const countedLetters = countLetters(str);

  if (countedLetters[0] > countedLetters[1]) {
    return str.toUpperCase();
  }

  return str.toLowerCase();
}

console.log(fixString('Mate Academy')); // 'mate academy'
console.log(fixString('Mate ACADEmy')); // 'MATE ACADEMY'
console.log(fixString('maTE')); // 'mate'
