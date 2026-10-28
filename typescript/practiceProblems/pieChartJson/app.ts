/*
Create a function `generatePieChart` that:

1. Takes a `JSON` object `data`, where:
  - **Key** is the item's name.
  - **Value** is the item's quantity.

2. Returns a `JSON` pie chart based on the `data` with keys and angles of corresponding slices (in degrees).

If necessary, angles should be rounded to two decimal places.
*/

const FULL_CIRCLE_DEGREES = 360;

type Data = {
  [key: string]: number;
}

function calculateTotal(jsData: Data): number {
  let total: number = 0;

  for (const value of Object.values(jsData)) {
    total += value;
  }

  return total;
}

function generatePieChart(data: string): string {
  const jsData: Data = JSON.parse(data);

  // Calculate total
  const total: number = calculateTotal(jsData);
  console.log(total)

  // Compute angles
  const pieChart: Data = {};

  for (const entries of Object.entries(jsData)) {
    const angle: number = (entries[1] / total) * FULL_CIRCLE_DEGREES;
    const roundedAngleStr: string = angle.toFixed(2);
    let finalAngle: number = +roundedAngleStr;

    const sliced: string = roundedAngleStr.slice(roundedAngleStr.length - 2);

    if (sliced === '00') {
      finalAngle = Math.floor(finalAngle * 100) / 100;
    }

    pieChart[entries[0]] = finalAngle;
  }

  return JSON.stringify(pieChart);
}

// const data = `{
//   "pencils": 18,
//   "pens": 36
// }`;

// console.log(generatePieChart(data));
// // `{
// //   "pencils": 120,
// //   "pens": 240
// // }`


const data = `{
  "cats": 182,
  "dogs": 213,
  "rabbits": 79
}`;

console.log(generatePieChart(data));
// `{
//   "cats": 138.23,
//   "dogs": 161.77,
//   "rabbits": 60
// }`


// const data = `{
//   "phones": 57
// }`;

// console.log(generatePieChart(data));
// // `{
// //   "phones": 360
// // }`;
