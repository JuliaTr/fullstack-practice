/*
Create the `Singleton` class, whose constructor always 
**returns a reference to the first created instance**.
*/

class Singleton {
  // `static` - belongs to the class itself
  // `#` - private and only accessible inside the class
  static #instance = null;

  constructor() {
    if (Singleton.#instance) {
      // Object is returned explicitly
      return Singleton.#instance;
    }
    
    Singleton.#instance = this;
  }
}

const firstObject = new Singleton();
/*
1. JS create a new object: `this = {}`
  Its prototype is `Singleton.prototype`
2. `Singleton.#instance = this`
3. For constructors, returning nothing is the same as
  `return this`

  firstObject --> {}
  Singleton.#inctance --> same object
*/

const secondObject = new Singleton();
/*
1. JS create a new object: `this = {}`
  Its prototype is `Singleton.prototype`
2. Constructor executes code `return Singleton.#instance`
  in `if` branch.
  Constructor returns the referernce to the first object

  If a constructor explicitly returns an object, that 
  object becomes the result of `new` instead of the 
  newly created one. 

  So the brand-new object that `new` just created is 
  immediately discarded, because another object is 
  explicitly returned.

  secondObject = Singleton.#instance
  which is the same as `firstObject`

There's only one reachable instance.
*/

// Both variables point to the exact same object.
console.log(firstObject === secondObject) // true

// Its prototype is `Singleton.prototype`
console.log(firstObject instanceof Singleton) // true

// Its prototype is `Singleton.prototype`
console.log(secondObject instanceof Singleton) // true




// Exploration:
// Makes explicit for consumers to obtain the singleton 
// through `singleton.getInstance()` rather than repeatedly 
// calling `new`.
class Singleton {
  static #instance;

  static getInstance() {
    if (!this.#instance) {
      this.#instance = new Singleton(true);
    }

    return this.#instance;
  }

  constructor(internal = false) {
    if (!internal) {
      throw new Error("Use Singleron.getInstance()");
    }
  }
}

// Output: Error: Use Singleron.getInstance()

const firstObject = new Singleton();
const secondObject = new Singleton();

console.log(firstObject === secondObject) // true
console.log(firstObject instanceof Singleton) // true
console.log(secondObject instanceof Singleton) // true
