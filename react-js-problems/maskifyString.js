/*
Create the function `maskifyStr` that accepts a string str and changes all but the last four characters into `#`.
*/

function maskifyStr(str) {
  let result = '';
  let count = str.length;
  const countToStop = count - 4;

  while (count >= 0) {
    let char = str[count] || '';

    if (count < countToStop) {
      char = '#';
    }

    result = char + result;
    count--;
  }

  return result;
}

console.log(maskifyStr('')); // ''
console.log(maskifyStr('1')); // '1'
console.log(maskifyStr('1111')); // '1111'
console.log(maskifyStr('Skippy1234')); //'######1234'
