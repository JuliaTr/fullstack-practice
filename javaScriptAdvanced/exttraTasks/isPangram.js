const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

function isPangram(str) {
  const strLowerCase = str.toLowerCase();

  for (const letter of ALPHA) {
    if (!strLowerCase.includes(letter)) return false;
  }

  return true;
}

console.log(
  isPangram('abcdefghijklmnopqrstuvwxyz')
); // === true

console.log(
  isPangram('Sphinx of black quartz, judge my vow.')
); // === true

console.log(
  isPangram('AbCdEfGhIjKlMzxWvUtSrQpOn')
); // === false // 'y' is missing

console.log(isPangram('Detect Pangram')); //=== false 
