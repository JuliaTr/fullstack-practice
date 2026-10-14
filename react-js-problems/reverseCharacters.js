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


'rewqtyuisapodfghlkj'

'rewqtyuisapodfghlkj'
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
    console.log('~~~~~~~~~~~~~~~~~~~~~')
    console.log('newStr:', newStr)
    console.log(`temp:`, temp)
    console.log('isIncreased', isIncreased)
    console.log('i:', i)
    console.log('step:', step)

    const char = str[i];

    console.log('char:', char)

    if (isIncreased) {
      console.log('print1')
      newStr += char;
    } else {
      console.log('print2')
      temp.push(char);
    }

    console.log(`temp:`, temp)

    if (temp.length === k) {
      console.log('print3')
      newStr += temp.reverse().join('');

      console.log(temp)

      temp = [];
      step += 2 * k;
      isIncreased = true;
    }

    if (i === step - 3) {
      console.log('print4')
      isIncreased = false;
    }
  }

  return newStr;
}

// console.log(reverseChars('abcdefg', 2)); // 'bacdfeg' 
// console.log(reverseChars('abcdabcdabcd', 3)); // 'cbadabadcbcd'
// console.log(reverseChars('qwerty', 6)); // 'ytrewq'
// console.log(reverseChars('zxcv', 1)); // 'zxcv'


// `should reverse every other pair of characters if k = 2`
console.log(reverseChars('veeroythrepari', 2));
// 'everyotherpair'


// // `should reverse all characters at the end of the string if there are fewer than k characters left`
// console.log(reverseChars('qwertyuiopasdfghjkl', 4));
// // 'rewqtyuisapodfghlkj'


// // `should not change the input string if string length = 1`
// console.log(reverseChars('l', 6)); // 'l'

// // `should reverse the whole string if string length is less than k`
// console.log(reverseChars('gnirtsllams', 15)); 
// // 'smallstring'

// Works as expected
