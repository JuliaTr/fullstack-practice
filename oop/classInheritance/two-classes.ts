{
  class Coach {
    constructor(
      private _name: string,
      private _age: number,
    ) {}

    sayHi() {
      console.log(`Hi! I am your coach ${this._name}. I am ${this._age}`);
    }
  }

  class Student {
    constructor(
      private _name: string,
      private _age: number,
    ) {}

    sayHi() {
      console.log(`Hi! I am a student ${this._name}. I am ${this._age}`);
    }
  }

  const misha = new Coach('Misha', 38);
  const petro = new Student('Petro', 57);

  misha.sayHi();
  // Hi! I am your coach Misha. I am 38

  petro.sayHi();
  // Hi! I am a student Petro. I am 57
}
