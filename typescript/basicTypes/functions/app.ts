/*
`y?: number` - optional parameter
`y = 0` - optional parameter, too (type is defined by the value type)

Don't combine these two options. Use either or. 
*/

// Function declaration:
function add(x: number, y = 0): number {
  return x + y;
}

const result = add(2);

console.log(result);



// // `void` - does NOT return a value or returns `undefined`:
// function add(x: number, y: number): void {
//   // doesn't allow to return smth else, but not `void`
//   // if (true) {
//   //   return 123;
//   // }

//   return; // valid
//   // return undefined; // valid
// }



// Function expression:
// // Option 1:
// const multiply = (x: number, y: number): number => {
//   return x + y;
// }


// Option 2:
type Callback = (x: number, y: number) => number;

const subtract: Callback = (x, y) => {
  return x - y;
}

const multiply = (x: number, y: number): number => {
  return x + y;
}


// // More examples:
// type Callback = (a: number, b: number) => number;

// const sum: Callback = (a, b) => a + b;
// const multiply: Callback = (a, b) => a * b;



// type Callback = (a: number, b: number) => number;

// const square: Callback = a => a * a;
// const reply: Callback = () => 42;



// type Callback = (a: number, b: number) => void;

// const printArgs: Callback = (...args) => {
//   console.log(args);
// }

// const f2: Callback = () => '123';



// function doSomething(): void {
//   console.log('Doing something ...');
// }

// function test(x: number): void {
//   if (x > 10) {
//     return;
//   }

//   if (x < 0) {
//     return undefined;
//   }

//   if (x === 5) {
//     return 5; 
//     // Type 'number' is not assignable to type 'void'
//   }
// }
