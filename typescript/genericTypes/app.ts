/*
When I type value for `querySelector`, TS knows which type this element be. It's `HTMLInputElement`.

Generic Types:
- 'generic' means inside it can have properties of different type
- ex: array
*/

// // Generic Types:
// // Option 1: (works) - often in use
// const field5 = document.querySelector<HTMLInputElement>('.field');

// // Checks empty value
// if (field5) {
//   console.dir(field5.value);
// }

// // Type Quards - to check object type
// // Checks field necessary type
// if (field5 instanceof HTMLInputElement) {
//   console.dir(field5.value); 
//   // Will always be `HTMLInputElement`
// } else {
//   console.log(field5);
//   // Will always be `null`
// }


// Works (convert to a list):
const field7: Array<HTMLInputElement> = [...document.querySelectorAll<HTMLInputElement>('.field')];

if (field7 instanceof HTMLInputElement) {
  console.dir(field7.value);
} else {
  console.log(field7);
}

/*
(2) [input.field, input.field]
0: input.field
1: input.field
length: 2
[[Prototype]]: Array(0)
*/


// Custom generic type:





// Examples to practice:
// // Find element by html tag
// const field1 = document.querySelector('input');

// // console.dir(field) // input.field

// if (field1) {
//   console.dir(field1.value);
//   // result: const field1: HTMLInputElement | null
// }


// // Find element by class
// // // Won't work
// // const field2 = document.querySelector('.field');

// // // if (field2) {
// // //   console.dir(field2.value); 
// // //   // Error: Property 'value' does not exist on type 'Element'.
// // // }


// // Option 1: (works)
// // Indicate `HTMLInputElement` for TS if we know for sure that it will work always the same
// const field3 = document.querySelector('.field') as HTMLInputElement;

// console.dir(field3.value)



// // Option 2: (works)
// const field4 = <HTMLInputElement>document.querySelector('.field')

// console.dir(field4.value);



// // Won't work with `querySelectorAll`, because it's `NodeListOf<HTMLInputElement>`
// const field6 = document.querySelectorAll<HTMLInputElement>('.field');

// if (field6 instanceof HTMLInputElement) {
//   console.dir(field6.value);
// } else {
//   console.log(field6);
// }
