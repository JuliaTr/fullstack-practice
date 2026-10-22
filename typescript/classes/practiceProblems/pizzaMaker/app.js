"use strict";
/*
1. `Topping` type with all available fillings in our pizzeria:
  - `cheese`
  - `peppers`
  - `salami`
  - `pepperoni`
  - `mushrooms`
  - `olives`
2. `Pizza` class with a constructor that takes name (pizza name) and toppings (an array of fillings). Include a `createdOn` field with the current date (`new Date()`) to track when the pizza was made.
3. `Order` interface with name and toppings fields (similar to Pizza).
4. `PizzaMaker` class (our hardware) without a constructor, but **with a static method `create`** that accepts an `order` object and returns the pizza.
*/
const availableToppings = [
    'cheese',
    'peppers',
    'salami',
    'pepperoni',
    'mushrooms',
    'olives',
];
class Pizza {
    name;
    toppings;
    createdOn;
    constructor(name, toppings, createdOn = new Date()) {
        this.name = name;
        this.toppings = toppings;
        this.createdOn = createdOn;
    }
}
class PizzaMaker {
    static create(order) {
        return new Pizza(order.name, order.toppings);
    }
}
const pizza = PizzaMaker.create({
    name: 'Margarita',
    toppings: ['cheese', 'pepperoni', 'peppers'],
});
console.log(pizza);
/*
{
  name: 'Margarita',
  toppings: ['cheese', 'pepperoni', 'peppers'],
  createdOn: 'Wed Oct 06 2021 16:49:52 GMT+0300 (Eastern European Summer Time)',
}
*/
