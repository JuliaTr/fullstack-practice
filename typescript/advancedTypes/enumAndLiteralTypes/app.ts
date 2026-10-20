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




// Enum type:
// Option 1:
enum PizzaSize2 {
  small,  // 0
  medium, // 1
  large,  // 2
}

let size2: PizzaSize2 = PizzaSize2.small;
console.log(size2); // 0



// Option 2:
enum PizzaSize3 {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

let size3: PizzaSize3 = PizzaSize3.small;
console.log(size3); // small
