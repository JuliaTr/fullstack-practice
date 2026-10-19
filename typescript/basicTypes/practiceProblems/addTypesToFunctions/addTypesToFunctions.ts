function isAdult(age: number): boolean {
  return age >= 18;
}

function getMessage(name: string, age: number): string {
  if (isAdult(age)) {
    return `${name} is adult`;
  }

  return `${name} is too young`;
}

function returnMessage(): string {
  const message1: string = getMessage('Misha', 37);
  const message2: string = getMessage('Antony', 17);

  return `${message1}. ${message2}.`;
}

console.log(returnMessage());
