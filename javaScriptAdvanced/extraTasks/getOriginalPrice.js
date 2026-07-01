/*
Create a function `getOriginalPrice` that:

- Takes a positive number `salePrice` (discounted price) 
  `and a non-negative number `discount` (the discount 
  percentage).
- Returns the original price, rounded to two decimal 
  places.

And so, if an item costs `75` after a 25% discount, the 
function should return the original price, which is `100`.
*/

const PERCENT = 100;

function getOriginalPrice(salePrice, discount) {
  const percentOfCost = PERCENT - discount;
  const originalPrice = (salePrice * PERCENT) / percentOfCost;
  const rounded = Number(originalPrice.toFixed(2));

  return rounded;
}

console.log(getOriginalPrice(75, 25)); // 100
console.log(getOriginalPrice(25, 75)); // 100
console.log(getOriginalPrice(40, 50)); // 80
console.log(getOriginalPrice(63, 15)); // 74.12

// Works as expected
