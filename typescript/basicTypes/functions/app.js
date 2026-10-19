"use strict";
/*
`y?: number` - optional parameter
`y = 0` - optional parameter, too (type is defined by the value type)

Don't combine these two options. Use either or.
*/
// Function declaration:
function add(x, y = 0) {
    return x + y;
}
const result = add(2);
console.log(result);
const subtract = (x, y) => {
    return x - y;
};
const multiply = (x, y) => {
    return x + y;
};
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
