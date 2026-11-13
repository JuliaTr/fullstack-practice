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

    // set ag
  }

  // function sayHi(user: User) {
  //   let message = 'Hi!';
  
  //   if (user.isCoach) {
  //     message += ` I am your coach ${user.name}.`;
  //   } else {
  //     message += ` I am a student ${user.name}.`;
  //   }

  //   message += ` I am ${user.age}`;

  //   console.log(message);
  // }

  let misha = new User('Misha', 38, true);

  console.log(misha.getName()); // Misha
  console.log(misha.age); // 38

  // Without setter
  // misha.age = 8  // Error

  // Without `getName()`
  // console.log(misha.name); // Error

  // sayHi(misha); // Error
}
