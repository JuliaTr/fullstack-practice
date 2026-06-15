function generateRageOfNumbers(min, max) {
  const range = [];

  for (let number = min; number <= max; number++) {
    range.push(number);
  }

  return range;
}

function makeRandomizer(numbers) {
  const min = numbers[0];
  const max = numbers[numbers.length - 1];

  // Create range of numbers 
  const range = generateRageOfNumbers(min, max);

  return function randomizer() {
    // Get random number
    const randNumber = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };
    const number = randNumber(range);

    // Find index of random number
    const index = range.indexOf(number);

    if (index !== -1) {
      range.splice(index, 1);

      return number;
    }

    return null;
  };
}

const getRandom = makeRandomizer([1, 4]);

console.log(getRandom()); // === 3
console.log(getRandom()); // === 4
console.log(getRandom()); // === 2
console.log(getRandom()); // === 1
console.log(getRandom()); // === null
console.log(getRandom()); // === null

// Works as expected



// Experiment
// Infinite loop risk; wrong null consition
function makeRandomizer(numbers) {
  const min = numbers[0];
  const max = numbers[numbers.length - 1];
  const randNumbers = [];

  return function randomizer() {
    const randNumber = Math.floor(
      min + Math.random() * (max + 1 - min),
    );

    if (randNumbers.includes(randNumber)) {
      return null;
    }

    randNumbers.push(randNumber);

    return randNumber;
  };
}

const getRandom = makeRandomizer([1, 4]);

console.log(getRandom()); // === 3
console.log(getRandom()); // === 4
console.log(getRandom()); // === 2
console.log(getRandom()); // === 1
console.log(getRandom()); // === null
console.log(getRandom()); // === null
