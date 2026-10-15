/*
Create a function `isLeapYear` that:

1. Takes a positive integer year.
2. Returns `true` if the given year is a leap year, otherwise `false`.

Leap years are divisible by `4` but not by `100`, except for years divisible by `400`, which are leap years.
*/

function isLeapYear(year) {
  return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0)); 
}

console.log(isLeapYear(1884)); // true 
// 1884 is divisible by 4

console.log(isLeapYear(1700)); // false 
// 1700 is divisible by 100

console.log(isLeapYear(2000)); // true 
// 2000 is divisible by 400

console.log(isLeapYear(1925)); // false 
// 1925 is not divisible by 4
