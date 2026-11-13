/*
The snail Bob crawls up the column. During the day he crawls up some distance and during the night he sleeps, so he slides down for some distance (less than crawls up during the day).

Write function countDays that takes three arguments:
  - `height` - the height of the column (integer greater than `0`);
  - `up` - the distance that Bob crawls during the day (integer greater than `0`);
  - `down` - the distance that Bob slides down during the night (integer greater than `0`).

Calculate the number of days when Bob will reach the top of the column.
*/

function countDays(height, up, down) {
  let days = 0;

  for (let i = 1; i < height; i += up - down) {
    days++;
  }

  return days;
}

console.log(countDays(2, 2, 1)); // 1
// Bob will reach the top of the two-meter column in one day
// if his distance during the day is 2 meters.

console.log(countDays(10, 3, 1)); // 5
// Bob will reach the top of the ten-meter column in five days
// if his distance during the day is 3 meters and during the night is 1 meter.

// `should return the number of days when it takes multiple days for the snail to crawl up`
console.log(countDays(3, 2, 1)); // 2
