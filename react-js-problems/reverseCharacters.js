/*
Create a function `reverseChars` that:

1. Takes a string `str` and a positive integer `k`.
2. Reverses the first `k` characters for every `2k` characters, where:
- If there are fewer than `k` characters in the `str`, the function should reverse them all.
- If there are less than `2k` but more than `k` characters, the function should reverse the first `k` characters, and leave others intact.

________________________________________

'abcdefg'

.      .
'ba cd fe g'


'abcdabcdabcd'
'cba dab adc bcd'
*/

function reverseChars(str, k) {
  let newStr = '';
  let temp = [];
  let step = k;
  let isIncreased = false;

  for (let i = 0; i < str.length; i++) {
    // console.log('~~~~~~~~~~~~~~~~~~~~~')
    // console.log(newStr)
    // console.log(temp)
    // console.log(isIncreased)

    const char = str[i];

    // console.log(char)

    if (isIncreased) {
      newStr += char;
    } else {
      temp.push(char);
    }

    if (temp.length === k) {
      newStr += temp.reverse().join('');

      // console.log(temp)

      temp = [];
      step *= 2;
      isIncreased = true;
    }

    if (i === step - 1) {
      isIncreased = false;
    }
  }

  return newStr;
}

console.log(reverseChars('abcdefg', 2)); // 'bacdfeg' 
console.log(reverseChars('abcdabcdabcd', 3)); // 'cbadabadcbcd'
console.log(reverseChars('qwerty', 6)); // 'ytrewq'
console.log(reverseChars('zxcv', 1)); // 'zxcv'

// Works as expected
