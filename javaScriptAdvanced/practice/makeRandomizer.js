
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
