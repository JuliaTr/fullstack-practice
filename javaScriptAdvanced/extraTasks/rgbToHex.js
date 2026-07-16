/*
Create the function `rgbToHex` that:

- Takes three parameters: r, g, and b, representing 
  RGB decimal values.
- Returns a string with a hexadecimal representation 
  of the RGB values.

Here's what you should consider:
- Valid RGB values range from 0 to 255, inclusive. 
  Values outside of this range should be rounded to 
  the closest valid value.
- The result should always be 6 characters long, with 
  all letters in uppercase (if they occur).
*/
const MAX_RGB = 255;
const MAX_NUMBER = 9;
const HEX_DECIMAL_SYSTEM = 16;
const ALPHA = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

function getKey(number) {
  const floorNumber = Math.floor(number);
  let hex = '';

  if (floorNumber <= MAX_NUMBER) {
    hex += floorNumber.toString();
  }

  if (floorNumber > MAX_NUMBER) {
    for (const entries of Object.entries(ALPHA)) {
      if (entries[1] === floorNumber) {
        hex += entries[0];
      }
    }
  }

  return hex;
}

function rgbToHex(r, g, b) {
  let hex = '';

  for (const color of [r, g, b]) {
    let roundedColor = color;

    if (color < 0) {
      roundedColor = 0;
    }

    if (color > MAX_RGB) {
      roundedColor = MAX_RGB;
    }

    const wholeNumber = roundedColor / HEX_DECIMAL_SYSTEM;
    const remainder = roundedColor % HEX_DECIMAL_SYSTEM;

    hex += getKey(wholeNumber);
    hex += getKey(remainder);
  }

  return hex;
}

console.log(rgbToHex(255, 255, 255)); // 'FFFFFF'
console.log(rgbToHex(0, 0, 0)); // '000000' 
// the result should always be 6 characters long, so '000' becomes '000000'

console.log(rgbToHex(9, 158, 160)); // '099EA0' 
// the result should always be 6 characters long, so '9' becomes '09'

console.log(rgbToHex(275, 105, 180)); // 'FF69B4' 
// if value is greater than 255, it's rounded down to 255

console.log(rgbToHex(128, 128, -128)); // '808000' 
// if value is less than 0, it's rounded up to 0

// Works as expected
