{
  // Data
  let age = 38;
  let name = 'Misha';
  let isCoach = true;

  // Methods, functions
  function sayHi(name, age, isCoach) {
    let message = 'Hi!';
  
    if (isCoach) {
      message += ` I am your coach ${name}.`;
    } else {
      message += ` I am a student ${name}.`;
    }

    message += ` I am ${age}`;

    console.log(message);
  }

  sayHi(name, age, isCoach);
  // Hi! I am your coach Misha. I am 38

  sayHi('Pedro', 57, false);
  // Hi! I am a student Pedro. I am 57

  // Wrong arguments
  sayHi(25, true, 'Roma');
  // Hi! I am your coach 25. I am true
}
