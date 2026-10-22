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

type Topping = 
  | 'cheese' 
  | 'peppers' 
  | 'salami' 
  | 'pepperoni'
  | 'mushrooms'
  | 'olives'

const availableToppings: Topping[] = [
  'cheese',
  'peppers',
  'salami', 
  'pepperoni',
  'mushrooms',
  'olives',
];

interface Order {
  name: string,
  toppings: Topping[]
}

class Pizza {
  constructor(
    public name: string,
    public toppings: Topping[],
    public createdOn = new Date()
  ) {}
}

class PizzaMaker { 
  static create(order: Order): Pizza {
    return new Pizza(order.name, order.toppings);
  }
}

const pizza = PizzaMaker.create({
  name: 'Margarita',
  toppings: ['cheese', 'pepperoni', 'peppers'],
});


console.log(pizza)
/*
{
  name: 'Margarita',
  toppings: ['cheese', 'pepperoni', 'peppers'],
  createdOn: 'Wed Oct 06 2021 16:49:52 GMT+0300 (Eastern European Summer Time)',
}
*/
