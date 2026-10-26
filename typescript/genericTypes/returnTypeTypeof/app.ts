/*
Context of Types:
- using `type`
- after `:`
- inside generic (like `ReturnType<typeof add>`)

`typeof` is used for context of types not often. In Redux.
*/

// Works without return type `number`:
function add(a: number, b: number) {
  return a + b;
}

// `multiple` has the same type as function `add`

// // Context of execution:
// // `typeof` after `=` is an operator which returns type of variable: `enum` type
// const Callback = typeof add;
// // const Callback: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"

// Context of types:
// `typeof` looks for variable and returns TS type. `Callback` is type of function
type Callback = typeof add;
// type Callback = (a: number, b: number) => number

const multiple: Callback = (a, b) => a * b;

type Result = ReturnType<Callback>;
// same as
// type Result = ReturnType<typeof add>

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
