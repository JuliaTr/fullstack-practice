/*
Create a function `isSquare` that:

1. Takes a number.
2. Returns `true`, if the number is a perfect square, otherwise `false`.
*/

function isSquare(n) {
  // Check if negative
  if (n < 0) {
    return false;
  }

  // Chaeck if square
  for (let number = 0; number <= n; number++) {
    const square = number * number;

    if (square === n) {
      return true;
    }
  }

  return false;
}

console.log(isSquare(16)); // true // 4 * 4 = 16
console.log(isSquare(2)); // false // 2 isn't a perfect square
console.log(isSquare(-4)); // false // Negative numbers can't be perfect squares
