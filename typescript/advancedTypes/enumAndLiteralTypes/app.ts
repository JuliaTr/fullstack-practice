// type PizzaSize = string;

// let size: PizzaSize = 'small';
// console.log(size);

// size = 'medium';
// console.log(size);

// size = 'large123'; // no error 
// (no convenient, bc we can write any string)
// console.log(size)




// Literal type:
type PizzaSize = 'small' | 'medium' | 'large';

let size: PizzaSize = 'small';
console.log(size);

size = 'medium';
console.log(size);

// size = 'large123'; // error 
// (limit which values to use)
// console.log(size)
