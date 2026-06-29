/*
Create the calculateCost function, which takes:

- `bucket` object with spare parts we're going to purchase
- `products` object with part prices.
*/

function createAllProductsObject(products) {
  const productsValues = Object.values(products);
  const allProducts = {};

  for (const product of productsValues) {
    Object.assign(allProducts, product);
  }

  return allProducts;
}

function calculateCost(bucket, products) {
  const allProducts = createAllProductsObject(products);
  let sum = 0;

  for (const entry of Object.entries(bucket)) {
    sum += entry[1] * allProducts[entry[0]];
  }

  return sum;
}

const bucket = {
  display: 20,
  wheel: 100,
  cpu: 40,
}

const products = {
  amazobot: {
    wheel: 12.5, // 100 * 12.5 = 1250
  },
  robozetka: {
    display: 56.2, // 20 * 56.2 = 1124
    cpu: 150, // 40 * 150 = 6000
  },
}

// 1250 + 1124 + 6000 = 8374

console.log(calculateCost(bucket, products)); // 8374
// works as expected
