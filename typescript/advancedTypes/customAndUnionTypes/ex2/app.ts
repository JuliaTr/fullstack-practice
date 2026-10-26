/*
`|`:
- can be used with many types
- each types are separate (when we want to perform a selection later)

*/

let age1: number = 10;

// `|` is a union type; can be used with many types
type ProductId = number | string;
let productId1: ProductId = '12345';

const availableProductIds1: ProductId[] = [];
const selectProductIds1: ProductId[] = [];

function isSelected1(id: ProductId, products: ProductId[]): boolean {
  return products.includes(id);
}

function printProduct1(id: ProductId) {
  console.log(`Product #${id}`);
}

console.log(printProduct1(productId1));



// // More examples:
// type ConfigOption = string | string[] | boolean;

// let files: ConfigOption = [];
// let imports: ConfigOption = false;
