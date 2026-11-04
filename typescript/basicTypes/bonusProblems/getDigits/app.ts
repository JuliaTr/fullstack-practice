/*
Create a function getDigits that:

Takes a positive integer.
Returns an array of the integer's digits:
In the form of numbers — NOT strings.
Sorted ascendingly.
*/

function getDigits(number: number): number[] {
  const numberToArray: string[] = number.toString().split('');
  const arrayOfNumbers: number[] = numberToArray.map((el: string) => +el);
  const sorted: number[] = arrayOfNumbers.sort((el1: number, el2: number) => el1 - el2);

  return sorted;
}

console.log(getDigits(5)); // [5]
console.log(getDigits(721)); // [1, 2, 7]
console.log(getDigits(4044)); // [0, 4, 4, 4]

// Works as expected
