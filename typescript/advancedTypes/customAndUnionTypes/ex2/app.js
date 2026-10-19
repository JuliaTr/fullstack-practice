"use strict";
let age1 = 10;
let productId1 = '12345';
const availableProductIds1 = [];
const selectProductIds1 = [];
function isSelected1(id, products) {
    return products.includes(id);
}
function printProduct1(id) {
    console.log(`Product #${id}`);
}
printProduct1(productId1);
