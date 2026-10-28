/*
Create a `sortAnimals` function that:

1. Takes an array of objects `animals`.
2. Returns a copy of `animals` sorted by their number of legs (`numberOfLegs`), and for those with the same number of legs — by their names (`name`).

`sortAnimals` shouldn't modify the original array.
*/

/**
 * @typedef {Object} Animal
 * @property {string} name
 * @property {number} numberOfLegs
 *
 * @param {Animal[] | null} animals
 *
 * @returns {Animal[] | null}
 */

type Animal = {
  name: string;
  numberOfLegs: number;
}

function sortAnimals(animals: Animal[]): Animal[] {
  const sorted: Animal[] = animals.toSorted(
    (a: Animal, b: Animal) => a.numberOfLegs - b.numberOfLegs);
  
  return sorted;
}

const animals = [
  { name: 'Dog', numberOfLegs: 4 }, 
  { name: 'Snake', numberOfLegs: 0 }, 
  { name: 'Pig', numberOfLegs: 4 },
  { name: 'Bird', numberOfLegs: 2 },
  { name: 'Cat', numberOfLegs: 4 },
];

console.log(sortAnimals(animals));
// [
//   { name: 'Snake', numberOfLegs: 0 },
//   { name: 'Bird', numberOfLegs: 2 }, 
//   { name: 'Cat', numberOfLegs: 4 },  
//   { name: 'Dog', numberOfLegs: 4 },
//   { name: 'Pig', numberOfLegs: 4 }
// ];
