function reverseWords(str) {
  const splitWords = str.split(' ');

  const reversedWords = splitWords.map((word) => {
    return word.split('').reverse().join('');
  });

  return reversedWords.join(' ');
}

console.log(reverseWords('This is an example!'));
// 'sihT si na !elpmaxe'

console.log(reverseWords('double  spaces')); 
// 'elbuod  secaps'

// Works as expected