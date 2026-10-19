let age: number = 10;
let productId: number = 12345;

const availableProductIds: number[] = [];
const selectProductIds: number[] = [];

function isselected(id: number, products: number[]): boolean {
  return products.includes(id);
}

function printProduct(id: number) {
  console.log(`Product #${id}`);
}

printProduct(productId);
