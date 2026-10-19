/*
let value: 
// `value`'s value can be anything

let value: any;

value = 123;
value = 'qwe';
// no error

This situation never can be
*/


let value: number;

value = 123;
// value = 'qwe'; // error

let age = 25;           // 'number' type
let firstName = 'John'; // 'string' type
let isMarried = false;  // 'boolean' type

let wife = null;        // 'any' type 
// let wife: null = null; // 'null' type

// let wife: null | string = null;
// wife = 123; // error (neither `null`, not string)
// wife = 'qwe`;
// wife = null;

let empty = undefined;  // 'any' type
// let empty: undefined = udefined; 
// ussually never used this way


// Arrays:
// let people = []; // `any[]` (array of any types)

let people: number[] = [];
people.push(123);
console.log(people);

// let people: string[] = []; // array of strings
// people.push(123); // error (bc we initialized array of strings)

// let people = [1]; // `number[]`
// array of numbers defines automatically

// Arrays are ussually typed.

