function findShortestLength(wordsString) {
  const strToArray = wordsString.split(' ');
  let shortestWord = strToArray[0].length;

  for (const word of strToArray) {
    if (word.length < shortestWord) {
      shortestWord = word.length;
    }
  }

  return shortestWord;
}

console.log(
  findShortestLength('We all live in a yellow submarine')
); // 1
console.log(findShortestLength('Queen Elizabeth')); // 5
console.log(findShortestLength('Extra   spaces')); // 0
