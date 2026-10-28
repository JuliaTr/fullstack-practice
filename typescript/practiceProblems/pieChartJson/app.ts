/*
Create a function `generatePieChart` that:

1. Takes a `JSON` object `data`, where:
  - **Key** is the item's name.
  - **Value** is the item's quantity.

2. Returns a `JSON` pie chart based on the `data` with keys and angles of corresponding slices (in degrees).

If necessary, angles should be rounded to two decimal places.
*/

type Data = {
  [key: string]: number;
}

function generatePieChart(data: string): Data {
  const parsedJSON: Data = JSON.parse(data);
  return parsedJSON;
}

const data = `{
  "pencils": 18,
  "pens": 36
}`;

console.log(generatePieChart(data));
// `{
//   "pencils": 120,
//   "pens": 240
// }`


// const data = `{
//   "cats": 182,
//   "dogs": 213,
//   "rabbits": 79,
// }`;

// console.log(generatePieChart(data));
// // `{
// //   "cats": 138.23,
// //   "dogs": 161.77,
// //   "rabbits": 60,
// // }`;


// const data = `{
//   "phones": 57
// }`;

// console.log(generatePieChart(data));
// // `{
// //   "phones": 360
// // }`;
