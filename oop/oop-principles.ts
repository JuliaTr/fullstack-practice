/*

- PROCEDURAL approach: data is separate, behaviour is in functions. Functions are called with passed data as arguments.

- OOP is an approach with which we combine data (properties) and behaviour (methods). Objects are interact with each other.

- Objects contain data and behaviour. Objects interact with each other.

OOP PRINCIPLES:
Encapsulation (and Information Hiding):
  - combine data and methods

Information Hiding
  - using `private`, `protected` for separation of inner and outer interface of objects.

Inheritance:
  - we reuse properties and methods of parent class in ancestor class

Polymorphism:
  - the same code works with data of different types

Abstraction:
  - we rely on abstraction (high-level agreement) (class and object). Class abstractly represents an object.

*/

{
  abstract class User {
    constructor(
      protected _name: string,
    ) {}

    abstract sayHi(): void;
  }

  class Coach extends User {
    sayHi() {
      console.log(`Hi! I am your coach ${this._name}.`);
    }
  }

  class Student extends User {
    sayHi() {
      console.log(`Hi! I am a student ${this._name}.`);
    }
  }

  class Mentor extends User {
    sayHi() {
      console.log(`Hi! I am your mentor ${this._name}.`);
    }
  }

  const misha = new Coach('Misha');
  const petro = new Student('Petro');
  const john = new Mentor('John');

  greet1([misha, petro, john]);

  function greet1(guests: User[]) {
    for (const guest of guests) {
      guest.sayHi();
    }
  }
}

/*
Hi! I am your coach Misha.
Hi! I am a student Petro.
Hi! I am your mentor John.
*/
