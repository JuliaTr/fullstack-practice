/*
Create a function `convertTime` that:

1. Takes a non-negative integer `seconds`.
2. Returns the time as a string in the format `HH:MM:SS`, where:
  - `HH` stand for hours and contain `2` digits, ranging from `00` to `99`.
  - `MM` stand for minutes and contain `2` digits, ranging from `00` to `59`.
  - `SS` stand for seconds and contain `2` digits, rangin from `00` to `59`.

The maximum number of seconds is `359999` (`99:59:59`).
*/

const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
const SECONDS_PER_MINUTE = 60;

const SECONDS_PER_HOUR = SECONDS_PER_MINUTE * MINUTES_PER_HOUR; // 3600

function convertTime(seconds) {
  const hours = seconds / SECONDS_PER_HOUR;
  const wholeHour = Math.floor(hours);

  console.log(hours)

  const minutes = (seconds % SECONDS_PER_HOUR) / MINUTES_PER_HOUR;
  const wholeMinutes = Math.floor(minutes);
  // // Calculate minutes:
  // const minutes = seconds / SECONDS_PER_MINUTE;

  // // Calculate hours:
  // const hours = minutes / MINUTES_PER_HOUR;
  
  // // Calculate seconds:
  // const secondsNow = SECONDS_PER_HOUR / minutes;
  return wholeMinutes
}

// console.log(convertTime(0)); // '00:00:00'
// console.log(convertTime(20)); // '00:00:20'
// console.log(convertTime(65)); // '00:01:05'
// console.log(convertTime(3600)); // '01:00:00'
console.log(convertTime(123456)); // '34:17:36'
