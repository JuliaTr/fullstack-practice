// Works without return type `number`:
function add(a: number, b: number) {
  return a + b;
}

// `multiple` has the same type as function `add`
type Callback = typeof add;
const multiple: Callback = (a, b) => a * b;

type Result = ReturnType<Callback>;
const result: Result = multiple(1, 2);

console.log(result)



// // Examples:
// // Works:
// function add(a: number, b: number): number {
//   return a + b;
// }

// // `multiple: typeof add` - `multiple` has the same type as function `add`
// // // Option 1:
// // const multiple: typeof add = (a, b) => a * b;

// // Option 2:
// type Callback = typeof add;
// const multiple: Callback = (a, b) => a * b;

// type Result = number;
// const result: Result = multiple(1, 2);

// console.log(result)
