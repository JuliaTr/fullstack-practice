/*
Create a function `groupByCommas` that:

1. Takes an integer `num`.
2. Returns a formatted integer with commas as thousands separators — in the form of a string.
*/

function groupByCommas(num) {
  const numberToString = Math.abs(num).toString();
  let strWithCommas = '';
  let i = numberToString.length - 1; // start from backwards
  let step = i - 2;

  while (i >= 0) {
    const char = numberToString[i];

    if (step < i || i === 0) {
      strWithCommas = `${char}${strWithCommas}`;
    } else {
      strWithCommas = `,${char}${strWithCommas}`;
      step -= 3;
    }

    i -= 1;
  }

  return num >= 0 ? strWithCommas : `-${strWithCommas}`;
}

console.log(groupByCommas(1234567)); // '1,234,567'
console.log(groupByCommas(-1234567)); // '-1,234,567'
console.log(groupByCommas(-123456)); // '-123,456'
console.log(groupByCommas(12)); // '12'
console.log(groupByCommas(-123)); // '-123'
