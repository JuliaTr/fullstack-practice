{
  // Data
  let age = 38;
  let name = 'Misha';
  let isCoach = true;
  
  // Commands
  let message = 'Hi!';
  
  if (isCoach) {
    message += ` I am your coach ${name}.`;
  } else {
    message += ` I am a student ${name}.`;
  }
  
  message += ` I am ${age}`;

  console.log(message);
  // Hi! I am your coach Misha. I am 38
}

