"use strict";
/*
Create a `sortAnimals` function that:

1. Takes an array of objects `animals`.
2. Returns a copy of `animals` sorted by their number of legs (`numberOfLegs`), and for those with the same number of legs — by their names (`name`).

`sortAnimals` shouldn't modify the original array.
*/
function sortAnimals(animals) {
    if (animals.length === 0) {
        return [];
    }
    return animals.toSorted((a, b) => {
        const legsSorted = a.numberOfLegs - b.numberOfLegs;
        if (legsSorted === 0) {
            return a.name.localeCompare(b.name);
        }
        return legsSorted;
    });
}
// const animals = [
//   { name: 'Dog', numberOfLegs: 4 }, 
//   { name: 'Snake', numberOfLegs: 0 }, 
//   { name: 'Pig', numberOfLegs: 4 },
//   { name: 'Bird', numberOfLegs: 2 },
//   { name: 'Cat', numberOfLegs: 4 },
// ];
// console.log(sortAnimals(animals));
// // [
// //   { name: 'Snake', numberOfLegs: 0 },
// //   { name: 'Bird', numberOfLegs: 2 }, 
// //   { name: 'Cat', numberOfLegs: 4 },  
// //   { name: 'Dog', numberOfLegs: 4 },
// //   { name: 'Pig', numberOfLegs: 4 }
// // ];
// `should sort an array by number of legs first and then by name`
const animals = [
    { name: 'Wolf', numberOfLegs: 4 },
    { name: 'Worm', numberOfLegs: 0 },
    { name: 'Ladybug', numberOfLegs: 6 },
    { name: 'Lion', numberOfLegs: 4 },
    { name: 'Tiger', numberOfLegs: 4 },
    { name: 'Snake', numberOfLegs: 0 }
];
console.log(sortAnimals(animals));
// [
//   { name: 'Snake', numberOfLegs: 0 },
//   { name: 'Worm', numberOfLegs: 0 },
//   { name: 'Lion', numberOfLegs: 4 },
//   { name: 'Tiger', numberOfLegs: 4 },
//   { name: 'Wolf', numberOfLegs: 4 },
//   { name: 'Ladybug', numberOfLegs: 6 }
// ];
// `should return an empty array if the input is an empty array`
console.log(sortAnimals([])); // []
// // Refactored
// type Animal = {
//   name: string;
//   numberOfLegs: number;
// }
// function areNumberOfLegsSame(animals: Animal[]): boolean {
//   const legs: number = animals[0].numberOfLegs;
//   return animals.every(
//     (animal: Animal) => animal.numberOfLegs === legs
//   );
// }
// function sortAnimals(animals: Animal[]): Animal[] {
//   if (animals.length === 0) {
//     return [];
//   }
//   const allLegsEqual: boolean = areNumberOfLegsSame(animals);
//   return animals.toSorted((a: Animal, b: Animal) => {
//     if (allLegsEqual) {
//       return a.name.localeCompare(b.name);
//     }
//     return a.numberOfLegs - b.numberOfLegs;
//   });
// }
// const animals = [
//   { name: 'Dog', numberOfLegs: 4 }, 
//   { name: 'Snake', numberOfLegs: 0 }, 
//   { name: 'Pig', numberOfLegs: 4 },
//   { name: 'Bird', numberOfLegs: 2 },
//   { name: 'Cat', numberOfLegs: 4 },
// ];
// console.log(sortAnimals(animals));
// // [
// //   { name: 'Snake', numberOfLegs: 0 },
// //   { name: 'Bird', numberOfLegs: 2 }, 
// //   { name: 'Cat', numberOfLegs: 4 },  
// //   { name: 'Dog', numberOfLegs: 4 },
// //   { name: 'Pig', numberOfLegs: 4 }
// // ];
// // `should return an empty array if the input is an empty array`
// console.log(sortAnimals([])); // []
// // Solution
// type Animal = {
//   name: string;
//   numberOfLegs: number;
// }
// function sortAnimals(animals: Animal[]): Animal[] {
//   const legs: number = animals[0].numberOfLegs;
//   const allLegsEqual: boolean = animals.every(
//     (animal: Animal) => animal.numberOfLegs === legs
//   );
//   if (allLegsEqual) {
//     return animals.toSorted((a: Animal, b: Animal) => (
//       a.name.localeCompare(b.name)
//     ));
//   }
//   return animals.toSorted(
//     (a: Animal, b: Animal) => (
//       a.numberOfLegs - b.numberOfLegs
//     ));
// }
// const animals = [
//   { name: 'Dog', numberOfLegs: 4 }, 
//   { name: 'Snake', numberOfLegs: 0 }, 
//   { name: 'Pig', numberOfLegs: 4 },
//   { name: 'Bird', numberOfLegs: 2 },
//   { name: 'Cat', numberOfLegs: 4 },
// ];
// console.log(sortAnimals(animals));
// // [
// //   { name: 'Snake', numberOfLegs: 0 },
// //   { name: 'Bird', numberOfLegs: 2 }, 
// //   { name: 'Cat', numberOfLegs: 4 },  
// //   { name: 'Dog', numberOfLegs: 4 },
// //   { name: 'Pig', numberOfLegs: 4 }
// // ];
