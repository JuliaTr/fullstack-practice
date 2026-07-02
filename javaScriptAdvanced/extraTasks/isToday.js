/*
- Write a function `isToday` that takes as a parameter an 
  object `date` and returns a boolean value representing 
  whether the date is today or not.
- Make sure that your function does not return a false 
  positive by just checking the day.
*/

function isToday(date) {
  // Get today's date
  const todayDate = new Date();

  // Get date from input
  const inputDate = new Date(date);

  return todayDate.toDateString() === inputDate.toDateString();
}

// If today is January 10, 2021:
const today = new Date('2021-01-10T09:39:30.514Z');
console.log(isToday(today));

const yesterday = new Date('2021-01-09T09:39:30.514Z')
console.log(isToday(yesterday));
