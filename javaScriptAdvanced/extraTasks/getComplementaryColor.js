/*
Write the function `getComplementaryColor` that:

- Takes a string of `hexColor`, representing a color in 
  hexadecimal format:
  - It can consist of numbers: `0` to `9`, and letters: `A` 
    to `F`.
  - It CANNOT contain the hash `#` symbol.
- Returns the complementary color of the given hex color as a string:
  - It must contain uppercase characters only.
  - It must be preceded by the hash `#` symbol.

If `hexColor` is less than `6` characters long, pad it with 
zeros at the start to make up for the missing characters. 
Just like so:

'bc9' => '000bc9'
'' => '000000'

In case hexColor `exceeds` the `6` character limit or contains 
non-hexadecimal characters or isn't a string, the function 
should throw an error 
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

Hexadecimal colors are a way to specify colors on the web.
https://www.w3schools.com/colors/colors_picker.asp
A complementary color is a color that, when added to the 
original color, results in white (#FFFFFF).

'\#000A23' + '\#FFF5DC' = '\#FFFFFF'


Notes:
A(10), B(11), C(12), D(13), E(14), F(15)

- small or capital letters are the same

'01fD08' -> rgb
01 = 1
fD = (15 * 16) + (13 * 1) = 253
08 = 8

'000000' - is black

'FFFFFF' -> rgb (white)
FF = (15 * 16) + (15 * 1) = 255
FF = (15 * 16) + (15 * 1) = 255
FF = (15 * 16) + (15 * 1) = 255

255 - 1 = 254
255 - 253 = 2
255 - 8 = 247
*/

const MAX_LENGTH = 6;
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
const WHITE_RGB = [255, 255, 255];

// Check if input valid. If invalid throws an error
function isValidHexColor(hexColor) {
  if (hexColor !== hexColor.toString()) {
    throw new Error("non-string type");
  }

  if (hexColor.length > MAX_LENGTH) {
    throw new Error("incorrect string length");
  }

  if (hexColor.match(/[^0-9A-Fa-f]/)) {
    throw new Error("contains non-hex chars");
  }

  if (hexColor.length === MAX_LENGTH && hexColor[0] !== '0') {
    throw new Error("non-hex color");
  }

  return true;
}

function prependZero(hexColor, hexColorLength) {
  let inputColor = hexColor;
  let conditionStop = MAX_LENGTH - hexColorLength;
  
  for (let i = 0; i < conditionStop; i++) {
    inputColor = '0' + inputColor;
  }
  
  return inputColor;
}

function calculateColor(pair) {
  let color = 0;

  for (let idx = 0; idx < pair.length; idx++) {
    let number = Number(pair[idx]);

    if (isNaN(number)) {
      number = ALPHA[pair[idx].toUpperCase()];
    }

    if (idx === 0) {
      color += number * HEX_DECIMAL_SYSTEM;
    }

    if (idx == 1) {
      color += number;
    }
  }

  return color;
}

// Convert hex to rgb
function convertHexToRgb(hexColor) {
  let inputColor = hexColor;
  let hexColorLength = hexColor.length;

  if (hexColorLength < MAX_LENGTH) {
    inputColor = prependZero(hexColor, hexColorLength);
  }

  const hexColorToRgb = [];

  for (let i = 0; i < inputColor.length - 1; i += 2) {
    const pair = inputColor.slice(i, i + 2);
    let calculatedColor = Number(pair);

    if (calculatedColor > MAX_NUMBER || isNaN(calculatedColor)) {
      calculatedColor = calculateColor(pair);
    }

    hexColorToRgb.push(calculatedColor);
  }

  return hexColorToRgb;
}

// Calculate complimentary color in rgb
function calculateComplementaryColor(hexColorToRgb) {
  const colors = [];
  let idx = 0;

  for (const color of WHITE_RGB) {
    const calculatedColor = color - hexColorToRgb[idx];
    colors.push(calculatedColor);
    idx++;
  }

  return colors;
}

function getKey(wholeNumber) {
  let hex = '';

  if (wholeNumber <= MAX_NUMBER) {
    hex += Math.floor(wholeNumber).toString();
  }

  if (wholeNumber > MAX_NUMBER) {
    for (const entries of Object.entries(ALPHA)) {
      if (entries[1] === Math.floor(wholeNumber)) {
        hex += entries[0];
      }
    }
  }

  return hex;
}

// Convert rgb complimentary color to hex
function convertRgbToHex(complementaryColor) {
  let hex = '';

  for (const color of complementaryColor) {
    const wholeNumber = color / HEX_DECIMAL_SYSTEM;

    if (wholeNumber !== Math.floor(wholeNumber)) {
      hex += getKey(wholeNumber);

      let remainder = color % HEX_DECIMAL_SYSTEM;
      hex += getKey(remainder);
    }
  }

  return '#' + hex;
}

// Main function
function getComplementaryColor(hexColor) {
  // Check if input valid. If invalid throws an error
  const isValid = isValidHexColor(hexColor);

  // Convert hex to rgb
  const hexColorToRgb = convertHexToRgb(hexColor);

  // Calculate complimentary color in rgb
  const complementaryColor = calculateComplementaryColor(hexColorToRgb);

  // Convert rgb complimentary color to hex
  const hexComplimentaryColor = convertRgbToHex(complementaryColor);

  return hexComplimentaryColor;
}

console.log(getComplementaryColor('01fD08')); //'#FE02F7'
console.log(getComplementaryColor('')); // '#FFFFFF' 
// '' becomes '000000'

console.log(getComplementaryColor('a23')); // '#FFF5DC' 
// 'a23' becomes '000a23'

console.log(getComplementaryColor('40fdEd2')); 
// throws an error (incorrect string length)

console.log(getComplementaryColor('76ecLL')); 
// throws an error (non-hex chars)

console.log(getComplementaryColor(293942)); 
// throws an error (non-string type)
