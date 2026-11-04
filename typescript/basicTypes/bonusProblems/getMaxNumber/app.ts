/*
Create a function getMaxNumber that:

Takes a number number.
Returns the largest number that can be obtained by rearranging the digits in number.
*/

function getMaxNumber(number: number): string[] {
  // if (number 
  const numberToArray: string[] = number.toString().split('');

  // if (number >= 0)
  
  return numberToArray;
}

console.log(getMaxNumber(123)); // 321
console.log(getMaxNumber(1)); // 1
console.log(getMaxNumber(1265)); // 6521
console.log(getMaxNumber(-526)); // -256
