/*
Create a function validateIP that:

- Takes a string str.
- Returns true, if str is a valid IPv4 address, otherwise 
` false`.

Rules for validating the IP address:
- IP consists of four octets, separated by dots.
- Octet contains digits between 0 and 225 inclusive.
- Octet cannot start with a 0 (e.g., 034 is invalid).
- Octet can only contain digits (letters, spaces and the 
  like characters are invalid).

Examples of valid IPs:

5.6.7.8
145.90.53.2

Examples of invalid IPs:

23.45.67 // three octets
1.2.5.6.8 // five octets
199.564.28.13 // 564 is greater that 255
174.231.093.46 // '093' is invalid
56.128.e1.2 // letters are invalid
*/

const MAX_OCTET = 255;
const VALID_NUMBER_OCTETS = 4;

function validateIP(str) {
  const octets = str.split('.');

  if (octets.length !== VALID_NUMBER_OCTETS) {
    return false;
  }

  for (const octet of octets) {
    if (octet.length > 1 && octet[0] === '0') {
      return false;
    }

    if (octet.match(/[^0-9]/g)) {
      return false;
    }

    const number = +octet;

    if (number > MAX_OCTET) {
      return false;
    }
  }

  return true;
}


console.log(validateIP('0.0.0.0')); // true
console.log(validateIP('5.6.7.8')); // true
console.log(validateIP('145.90.53.2')); // true

console.log(validateIP('23.45.67')); // false   
// three octets

console.log(validateIP('1.2.5.6.8')); // false   
// five octets

console.log(validateIP('199.564.28.13')); // false 
// 564 is greater that 255

console.log(validateIP('174.231.093.46')); // false 
// '093' is invalid

console.log(validateIP('56.128.e1.2')); // false 
// letters are invalid

// Works as expected
