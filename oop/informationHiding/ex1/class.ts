// Procedural approach:

{
  class User {
    name: string;
    age: number;
    isCoach: boolean;

    constructor(
      name: string, 
      age: number, 
      isCoach: boolean
    ) {
      if (age < 0) {
        throw new Error("Age can't be negative");
      }

      this.name = name;
      this.age = age;
      this.isCoach = isCoach;
    }
  }

  function sayHi(user: User) {
    let message = 'Hi!';
  
    if (user.isCoach) {
      message += ` I am your coach ${user.name}.`;
    } else {
      message += ` I am a student ${user.name}.`;
    }

    message += ` I am ${user.age}`;

    console.log(message);
  }

  let misha = new User('Misha', -10, true);
  let pedro = new User('Pedro', 57, false);

  sayHi(misha); // Error
  // Otherwise without guard clause, output would be: `Hi! I am your coach Misha. I am -10` 
}
