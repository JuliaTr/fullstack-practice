/*
When I type value for `querySelector`, TS knows which type this element be. It's `HTMLInputElement`.
*/

// Find element by html tag
const field1 = document.querySelector('input');

// console.dir(field) // input.field

if (field1) {
  console.dir(field1.value);
  // result: const field1: HTMLInputElement | null
}


// Find element by class
// // Won't work
// const field2 = document.querySelector('.field');

// // if (field2) {
// //   console.dir(field2.value); 
// //   // Error: Property 'value' does not exist on type 'Element'.
// // }


// Option 1: (works)
// Indicate `HTMLInputElement` for TS if we know for sure that it will work always the same
const field3 = document.querySelector('.field') as HTMLInputElement;

console.dir(field3.value)

