function cleanString(lowerCased) {
  let cleanedStr = '';

  for (const char of lowerCased) {
    if (char.match(/[a-z0-9]/)) {
      cleanedStr += char;
    }
  }

  return cleanedStr;
}

function isPalindrome(str) {
  const lowerCased = str.toLowerCase();
  const cleanedStr = cleanString(lowerCased);
  const reversed = Array.from(cleanedStr).reverse().join('');

  return cleanedStr === reversed;
}

console.log(isPalindrome('madam')); // true
console.log(isPalindrome('Kayak')); // true // cases should be ignored
console.log(isPalindrome('b2b')); // true

console.log(
  isPalindrome('Was it a cat I saw?')
); // true // spaces and punctuation should be ignored

console.log(
  isPalindrome('hello')
 ); // false // 'hello' backwards is 'olleh', so it's not a palindrome

console.log(
  isPalindrome('1noon2')
); // false // '1noon2' backwards is '2noon1', so it's not a palindrome
