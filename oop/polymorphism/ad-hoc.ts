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

  greet1([misha, petro, john]);

  function greet1(guests: User[]) {
    for (const guest of guests) {
      if (guest instanceof Coach) {
        guest.sayHi();
      } else if (guest instanceof Mentor) {
        guest.sayHi();
      } else if (guest instanceof Student) {
        guest.sayHi();
      }
    }
  }
}

/*
Hi! I am your coach Misha.
Hi! I am a student Petro.
Hi! I am your mentor John.
*/
