/* 
Write a function `makeDescOrder` that accepts one non-negative integer and returns it with its digits in descending order.
*/

function makeDescOrder(num) {
  const sortedNumbers = num.toString().split('').sort();
  const reversedNumbers = sortedNumbers.reverse();

  return Number(reversedNumbers.join(''));
}

console.log(makeDescOrder(42145)); // 54421
console.log(makeDescOrder(1450263)); // 6543210
console.log(makeDescOrder(12345679)); // 97654321

// works as expected
