// Дано const source = [1,2,3,5,1,5,9,1,2,8]. Створіть масив без дублікатів і масив тільки з дублікатами.

const source = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// Option 1:
const unique = [...new Set(source)];
console.log(unique); // [ 1, 2, 3, 5, 9, 8 ]

// a value in the set **may only occur once**. 
// [...value] returns an array 

const counts = source