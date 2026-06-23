/*
[2, 10, 9, 3]
 ^
  [2, 10, 9, 3]
             ^
[5, 6, 7]
    ^
  [5, 6, 7]
      ^

[6, 7, 1]
       ^
  [6, 7, 1]
      ^
*/

function isArrayPretty(numbers) {
  if (numbers.length === 0) {
    return false;
  }

  const checked = [];

  for (const number1 of numbers) {
    for (const number2 of numbers) {
      const difference = Math.abs(number1 - number2);

      if (difference === 1) {
        checked.push(true);
        break;
      }
    }
  }

  return checked.length === numbers.length;
}

console.log(isArrayPretty([2, 10, 9, 3])); // true
console.log(isArrayPretty([5, 6, 7])); // true
console.log(isArrayPretty([6, 7, 1])); // false
console.log(isArrayPretty([])); // false

