/*
Create a function getMaxNumber that:

Takes a number number.
Returns the largest number that can be obtained by rearranging the digits in number.
*/

function getMaxNumber(number: number): number {
  if (number >= 0 && number < 10) {
    return number;
  }

  const numberToArray: string[] = number.toString().split('');

  // if (number >= 0)
  
  return 0;
}

console.log(getMaxNumber(123)); // 321
console.log(getMaxNumber(1)); // 1
console.log(getMaxNumber(1265)); // 6521
console.log(getMaxNumber(-526)); // -256
