/*
Friday the 13th is considered an unlucky day. Write a function `countUnluckyDays` that:

- Takes an integer `year`.
- Calculates how many unlucky days are in the given year.
- Returns the total number of Black Fridays in the year as an integer.

All `year` integers that are `<= 0` should be considered years BC, and may also have unlucky days.
*/

const MONTHS = 12;
const WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const FRIDAY = WEEK[5];

function countUnluckyDays(year) {
  let unluckyCount = 0;

  for (let i = 1; i <= MONTHS; i++) {
    const thirteenth = new Date(year, i, 13);
    const day = WEEK[thirteenth.getDay()];

    if (day === FRIDAY) {
      unluckyCount += 1;
    }
  }

  return unluckyCount;
}

console.log(countUnluckyDays(1)); // 2; // Two Black Fridays in the year 1 AD

console.log(countUnluckyDays(2015)); // 3; // Three Black Fridays in the year 2015

console.log(countUnluckyDays(-3)); // 1; // One Black Friday in the year 3 BC

// `should return 1 if the year is 0`
console.log(countUnluckyDays(0)); // 1
