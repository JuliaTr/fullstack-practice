{
  const misha = {
    name: 'Misha',
    age: 38,
    isCoach: true,
  }

  function sayHi(user: any) {
    let message = 'Hi!';
  
    if (user.isCoach) {
      message += ` I am your coach ${user.name}.`;
    } else {
      message += ` I am a student ${user.name}.`;
    }

    message += ` I am ${user.age}`;

    console.log(message);
  }

  sayHi(misha);
  // Hi! I am your coach Misha. I am 38

  sayHi({
    name: 'Pedro', 
    age: 57, 
    isCoach: false,
  });
  // Hi! I am a student Pedro. I am 57

  sayHi({}); // no properties
  // Hi! I am a student undefined. I am undefined
}
