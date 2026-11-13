/*
Incapsulation: 
  - combining data nad behaviour in the object

Hiding:
  - dividing inner private interface and outer public interface
*/

// Procedural approach:

{
  class User {
    private name: string;
    private _age: number;
    public isCoach: boolean;

    constructor(
      name: string, 
      age: number, 
      isCoach: boolean
    ) {
      if (age < 0) {
        throw new Error("Age can't be negative");
      }

      this.name = name;
      this._age = age;
      this.isCoach = isCoach;
    }

    getName() {
      return this.name;
    }

    get age() {
      return this._age;
    }

    set age(value: number) {
      if (value < 0) {
        throw new Error("Age can't be negative");
      }

      this._age = value;
    }
  }

  function sayHi(user: User) {
    let message = 'Hi!';
  
    if (user.isCoach) {
      message += ` I am your coach ${user.getName()}.`;
    } else {
      message += ` I am a student ${user.getName()}.`;
    }

    message += ` I am ${user.age}`;

    console.log(message);
  }

  let misha = new User('Misha', 38, true);

  console.log(misha.getName()); // Misha
  console.log(misha.age); // 38

  misha.age = 39;

  // Without setter
  // misha.age = 8  // Error

  // Without `getName()`
  // console.log(misha.name); // Error

  sayHi(misha);
}
