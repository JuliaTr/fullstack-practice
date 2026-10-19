"use strict";
let age = 10;
let productId = 12345;
const availableProductIds = [];
const selectProductIds = [];
function isselected(id, products) {
    return products.includes(id);
}
function printProduct(id) {
    console.log(`Product #${id}`);
}
printProduct(productId);
