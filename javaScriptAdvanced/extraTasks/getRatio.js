const VALID_COLOR_CODES = 'abcdefghijklm';

function getRatio(colors) {
  let countErrors = 0;
  const colorsLength = colors.length;

  for (const letter of colors) {
    if (!VALID_COLOR_CODES.includes(letter)) {
      countErrors++;
    }
  }

  return `${countErrors}/${colorsLength}`;
}

console.log(getRatio('abcdefghijklm')); // '0/13'  
// // all letters are from 'a' to 'm' are treated as valid

console.log(getRatio('abcdnopq')); // '4/8' 
// letters 'n', 'o', 'p' and 'q' are treated as errors

console.log(getRatio('www')); // '3/3' 
// letter 'w' is treated as error
