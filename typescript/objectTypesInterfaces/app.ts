
// type Point2 = {
//   x: number;
//   y: number;
//   z: number;
// };

// interface Point {
//   x: number;
//   y: number;
//   z: string;
// };

// const pointA: Point = {
//   x: 0,
//   y: 1,
//   z: '2',
// };

  
/*
Objects:
- interfaces and type for objects are interchangable
- `?` for optional property
- `readonly` property caaanot be changed
*/


// Object:
// type Point2 = {
//   x: number;
//   y: number;
//   z: number;
// };

// interface Point {
//   x: number;
//   y: number;
//   z: string;
// };

// // `object` - for non primitive value; if we don't know which data type we have
// const pointA: object = {
//   x: 0,
//   y: 1,
//   z: '2',
// };





// // if we don't know which keys we can have in object, but we know types of values, type object:
// type Collection = {
//   [key: string]: number,
// };

// const pointA: Collection = {
//   x: 0,
//   y: 1,
//   z: 2,
// };




// type Point2D = {
//   readonly x: number;
//   y?: number;
// };

// interface Point extends Point2D {
//   z: number;
// };

// type Collection = {
//   [key: string]: number,
// };

// const pointA: Point = {
//   x: 0,
//   z: 2,
//   // x1: 12,
//   // Object literal may only specify known properties, and 'x1' does not exist in type 'Point'
// };

// // pointA.x = 12; 
// // Cannot assign to 'x' because it is a read-only property.


// function test(a: Point2D) {

// }

// test(pointA);



// // Valid
// type Point2D = {
//   readonly x: number;
//   y?: number;
// };
// interface Point {
//   readonly x: number;
//   y?: number;
//   z: number;
// };

// type Collection = {
//   [key: string]: number,
// };

// const pointA: Point = {
//   x: 0,
//   z: 2,
// };

// function test(a: Point2D) {

// }

// test(pointA);




// interface Point2D1 {
//   x: number;
//   y: number;
// };

// // type includes all properties of interface `Point2D1` and `z: number` property
// type Point1 = Point2D1 & {
//   z: number;
// };






// // `Omit`, `Pick`, `Partial`, `Required` utils:
// type Point2D = {
//   readonly x: number;
//   y?: number;
// };
// interface Point {
//   readonly x: number;
//   y?: number;
//   z: number;
// };

// type Collection = {
//   [key: string]: number,
// };

// const pointA: Point = {
//   x: 0,
//   y: 1,
//   z: 2,
// };

// // `Omit` - utility type; creates a new object type, which has all properties with their types without `z` property
// function test(a: Omit<Point, 'z'>) {

// }

// test({
//   x: 0,
//   y: 1,
// });


// // `Pick` - utility type which will have obligatory `z` property of necessary type
// function test(a: Pick<Point, 'z'>) {

// }

// test({
//   z: 0, // should pass only `z`
// });


// // `Partial` - object will have any properties from the type without extra properties
// function test(a: Partial<Point>) {

// }

// test({
//   z: 0,
//   x: 0,
//   // t: 0,
//   // Object literal may only specify known properties, and 't' does not exist in type 'Partial<Point>'.
// });


// // `Required` - all keys from type `Point` are required
// function test(a: Required<Point>) {

// }

// test({
//   x: 0,
//   y: 0,
//   z: 0,
// });





// `Readonly` util:
type Point2D = {
  readonly x: number;
  y?: number;
};
interface Point {
  readonly x: number;
  y?: number;
  z: number;
};

type Collection = {
  [key: string]: number,
};

// `Readonly` - property cannot be reassigned
const pointA: Readonly<Point> = {
  x: 0,
  y: 1,
  z: 2,
};

// pointA.x = 10;
// Cannot assign to 'x' because it is a read-only property.ts(2540)

function test(a: keyof Point) {

}

test('x');
// test('q');
// Argument of type '"q"' is not assignable to parameter of type 'keyof Point'.






// More examples:
// Valid
// type Point2 = {
//   x: number;
//   y: number;
//   z: number;
// };

// interface Point {
//   x: number;
//   y: number;
//   z: string;
// };

// const pointA: object = [];




// Valid
// type Point2 = {
//   x: number;
//   y: number;
//   z: number;
// };

// interface Point {
//   x: number;
//   y: number;
//   z: string;
// };

// const pointA: object = () => {};
