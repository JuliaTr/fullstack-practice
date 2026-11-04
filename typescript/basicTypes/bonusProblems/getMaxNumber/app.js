"use strict";
/*
Create a function getMaxNumber that:

Takes a number number.
Returns the largest number that can be obtained by rearranging the digits in number.
*/
function getMaxNumber(number) {
    if (number >= 0 && number < 10) {
        return number;
    }
    const numberToArray = Math.abs(number).toString().split('');
    if (number > 0) {
        const sortedDesc = numberToArray.sort((el1, el2) => Number(el2) - Number(el1));
        return Number(sortedDesc.join(''));
    }
    const sortedAsc = numberToArray.sort((el1, el2) => Number(el1) - Number(el2));
    return Number(`-${sortedAsc.join('')}`);
}
console.log(getMaxNumber(123)); // 321
console.log(getMaxNumber(1)); // 1
console.log(getMaxNumber(1265)); // 6521
console.log(getMaxNumber(-526)); // -256
// Works as expected
