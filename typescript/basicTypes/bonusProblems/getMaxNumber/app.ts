/*
Create a function getMaxNumber that:

Takes a number number.
Returns the largest number that can be obtained by rearranging the digits in number.
*/

function getMaxNumber(number: number): number {
  if (number >= 0 && number < 10) {
    return number;
  }

  const numberToArray: string[] = Math.abs(number).toString().split('');

  if (number > 0) {
    const sorted: string[] = numberToArray.sort((el1: string, el2: string) => Number(el2) - Number(el1));

    return Number(sorted.join(''));
  }
  
  return 0;
}

console.log(getMaxNumber(123)); // 321
console.log(getMaxNumber(1)); // 1
console.log(getMaxNumber(1265)); // 6521
console.log(getMaxNumber(-526)); // -256
