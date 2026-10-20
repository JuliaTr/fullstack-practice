// type Point2 = {
//   x: number;
//   y: number;
//   z: number;
// }

// interface Point {
//   x: number;
//   y: number;
//   z: string;
// }

// const pointA: Point = {
//   x: 0,
//   y: 1,
//   z: '2',
// };





// type Point2 = {
//   x: number;
//   y: number;
//   z: number;
// }

// interface Point {
//   x: number;
//   y: number;
//   z: string;
// }

// // `object` - for non primitive value; if we don't know which data type we have
// const pointA: object = {
//   x: 0,
//   y: 1,
//   z: '2',
// };





type Point2 = {
  x: number;
  y: number;
  z: number;
}

interface Point {
  x: number;
  y: number;
  z: string;
}

// if we don't know which keys we can have in object, but we know types of values, type object:
type Collection = {
  [key: string]: number,
}

const pointA: Collection = {
  x: 0,
  y: 1,
  z: 2,
};





// More examples:
// Valid
// type Point2 = {
//   x: number;
//   y: number;
//   z: number;
// }

// interface Point {
//   x: number;
//   y: number;
//   z: string;
// }

// const pointA: object = [];




// Valid
// type Point2 = {
//   x: number;
//   y: number;
//   z: number;
// }

// interface Point {
//   x: number;
//   y: number;
//   z: string;
// }

// const pointA: object = () => {};
