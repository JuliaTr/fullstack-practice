"use strict";
/*
Create a function getDigits that:

Takes a positive integer.
Returns an array of the integer's digits:
In the form of numbers — NOT strings.
Sorted ascendingly.
*/
function getDigits(number) {
    const numberToArray = number.toString().split('');
    const arrayOfNumbers = numberToArray.map((el) => +el);
    const sorted = arrayOfNumbers.sort((el1, el2) => el1 - el2);
    return sorted;
}
console.log(getDigits(5)); // [5]
console.log(getDigits(721)); // [1, 2, 7]
console.log(getDigits(4044)); // [0, 4, 4, 4]
// Works as expected
