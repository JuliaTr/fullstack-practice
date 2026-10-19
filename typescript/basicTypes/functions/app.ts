// Function declaration:
function add(x: number, y: number): number {
  return x + y;
}

const result = add(2, 3);

console.log(result);


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