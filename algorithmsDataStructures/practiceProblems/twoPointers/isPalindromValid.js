/*
Write a function isPalindromValid that determines whether a string is a palindrome, ignoring non-alphanumeric characters and case differences.
*/

function isPalindromValid(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left].match(/[^a-z]/i)) {
      left++;
      continue;
    } else if (str[right].match(/[^a-z]/i)) {
      right--;
      continue;
    }

    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindromValid(
  'Do geese see God?',
)); // true 

console.log(isPalindromValid(
  'Was it a car or a cat I saw?',
)); // true 

console.log(isPalindromValid(
  'A brown fox jumping over'
)); // false 
