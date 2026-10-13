/*
1. Write a function `lengthOfLastWord` that accepts a string `words` which consists of only Latin letters and spaces ' '.
2. Return the length of the last word in the string. If the last word does not exist, return `0`. Do not include spaces in the word's length.
*/

function lengthOfLastWord(words) {
  const cleanedArray = words.trim().split(' ');

  return cleanedArray[cleanedArray.length - 1].length;
}

console.log(lengthOfLastWord(' ')); // 0
console.log(lengthOfLastWord('Hello ')); // 5
console.log(lengthOfLastWord('Welcome to Mate Academy')); // 7
