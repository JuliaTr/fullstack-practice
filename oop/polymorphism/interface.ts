{
  interface Greeter {
    sayHi(): void;
  }

  class User {
    constructor(
      protected _name: string,
    ) {}
  }

  class Coach extends User implements Greeter {
    // if we comment this method, will see an error
    // Class 'Coach' incorrectly implements interface 'Greeter'. Property 'sayHi' is missing in type 'User' but required in type 'Greeter'.
    sayHi() {
      console.log(`Hi! I am your coach ${this._name}.`);
    }
  }

  class Student extends User implements Greeter {
    sayHi() {
      console.log(`Hi! I am a student ${this._name}.`);
    }
  }

  class Mentor extends User implements Greeter {
    sayHi() {
      console.log(`Hi! I am your mentor ${this._name}.`);
    }
  }

  const misha = new Coach('Misha');
  const petro = new Student('Petro');
  const john = new Mentor('John');

  greet1([misha, petro, john]);

  function greet1(guests: Greeter[]) {
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
