/* 
`protected`:
  - property can be read only in parent class and subclasses
  - property can NOT be read outside of the class.
*/

{
  class User {
    constructor(
      protected _name: string,
    ) {}
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

  misha.sayHi();
  // Hi! I am your coach Misha.

  petro.sayHi();
  // Hi! I am a student Petro.

  john.sayHi();
  // Hi! I am your mentor John.
}
