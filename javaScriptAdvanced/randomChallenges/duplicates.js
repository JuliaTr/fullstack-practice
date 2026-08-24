// Дано const source = [1,2,3,5,1,5,9,1,2,8]. Створіть масив без дублікатів і масив тільки з дублікатами.

// const source = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// // Option 1:
// const unique = [...new Set(source)];
// console.log(unique); // [ 1, 2, 3, 5, 9, 8 ]

// // a value in the set **may only occur once**. 
// // [...value] returns an array 

// const counts = source.reduce((acc, v) => {
//   acc[v] = (acc[v] || 0) + 1;
//   return acc;
// }, {});
// console.log(counts); 
// // { '1': 3, '2': 2, '3': 1, '5': 2, '8': 1, '9': 1 }

// const gotKeys = Object.keys(counts);
// console.log(gotKeys); 
// // [ '1', '2', '3', '5', '8', '9' ]

// const filtered = gotKeys.filter(k => counts[k] > 1);
// console.log(filtered); // [ '1', '2', '5' ]

// const duplicates = filtered.map(Number);
// console.log(duplicates); // [ 1, 2, 5 ]

// complexity: O(n)




// // Option 2:
// const source = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// const unique = [...new Set(source)];
// console.log(unique); // [ 1, 2, 3, 5, 9, 8 ]

// const duplicates = [...new Set(source.filter((el, i, arr) => arr.indexOf(el) !== i))];
// console.log(duplicates); // [ 1, 5, 2 ]

// // complexity 0(n^2)




// Option 3:

// Experiments:
const source = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

console.log(getDedupedAndDuplicates(source));

function getDedupedAndDuplicates(array) {
  const registry = new Set();
  console.log(registry); // Set(0) {}

  const duplicates = new Set();
  console.log(duplicates); // Set(0) {}

  for (const el of array) {
    if (!registry.has(el)) {
      registry.add(el);
      continue;
    }

    console.log(registry);
  }

  console.log(registry);
  return;
}

/*
Output:
Set(0) {}
Set(4) { 1, 2, 3, 5 }
Set(4) { 1, 2, 3, 5 }
Set(5) { 1, 2, 3, 5, 9 }
Set(5) { 1, 2, 3, 5, 9 }
Set(6) { 1, 2, 3, 5, 9, 8 }
undefined
*/
