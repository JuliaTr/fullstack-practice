/*
`abstract` keyword:
  - method:
    - oblige all ancestors to realize this method
  - class:
    - if class has `abstract` method, class should also be `abstract`.
    - we cannot instanciate objects of abstract class directly
*/

{
  abstract class User {
    constructor(
      protected _name: string,
    ) {}

    abstract sayHi(): void;
  }

  class Coach extends User {
    // if we comment this method, will see an error
    // `Non-abstract class 'Coach' does not implement inherited abstract member sayHi from class 'User'.`
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

  // const yuliia - new User('Yuliia');
  // // Cannot create an instance of an abstract class.

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
