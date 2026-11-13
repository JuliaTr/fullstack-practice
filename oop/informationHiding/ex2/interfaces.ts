{
  interface User {
    readonly name: string;
    age: number;
    isCoach: boolean;
  }

  const misha: User = {
    name: 'Misha',
    age: 38,
    isCoach: true,
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

  // // without `readonly` will work
  // misha.name = '';

  sayHi(misha);
  // Hi! I am your coach Misha. I am 38
}
