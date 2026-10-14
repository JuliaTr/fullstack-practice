/*
Create a function `reverseChars` that:

1. Takes a string `str` and a positive integer `k`.
2. Reverses the first `k` characters for every `2k` characters, where:
- If there are fewer than `k` characters in the `str`, the function should reverse them all.
- If there are less than `2k` but more than `k` characters, the function should reverse the first `k` characters, and leave others intact.

________________________________________

'abcdefg', 2
.      .
'ba cd fe g'


'abcdabcdabcd', 3
'cba dab adc bcd'


'veeroythrepari', 2
.      .     .     .
'ev er yo th er pa ir'


'qwer tyui opas dfgh jkl', 4
.          .         .
'rewq tyui sapo dfgh lkj'
*/

function reverseChars(str, k) {
  if (str.length < k) {
    return str.split('').reverse().join('');
  }

  let newStr = '';
  let temp = [];
  let step = k;
  let isIncreased = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (isIncreased) {
      newStr += char;
    } else {
      temp.push(char);
    }

    if (temp.length === k || i + 1 === str.length) {
      newStr += temp.reverse().join('');
      temp = [];
      step += 2 * k;
      isIncreased = true;
    }

    if (i === step - (k + 1)) {
      isIncreased = false;
    }
  }

  return newStr;
}

console.log(reverseChars('abcdefg', 2)); // 'bacdfeg' 
console.log(reverseChars('abcdabcdabcd', 3)); // 'cbadabadcbcd'
console.log(reverseChars('qwerty', 6)); // 'ytrewq'
console.log(reverseChars('zxcv', 1)); // 'zxcv'

// `should not change the input string if string length = 1`
console.log(reverseChars('l', 6)); // 'l'

// `should reverse the whole string if string length is less than k`
console.log(reverseChars('gnirtsllams', 15)); 
// 'smallstring'


// `should reverse every other pair of characters if k = 2`
console.log(reverseChars('veeroythrepari', 2));
// 'everyotherpair'


// `should reverse all characters at the end of the string if there are fewer than k characters left`
console.log(reverseChars('qwertyuiopasdfghjkl', 4));
// 'rewqtyuisapodfghlkj'


// `should reverse only k characters at the end of the string if there are less than 2k but more than k characters left`
console.log(reverseChars('nodtrerevsetsihtoteehnd', 3));
// 'dontreversethistotheend'


// Works as expected
