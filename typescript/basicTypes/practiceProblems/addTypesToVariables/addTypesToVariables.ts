function calculate(): number {
  const value: number = 10;
  const message: string = 'Hello!';
  const isPositive: boolean = true;
  const sign: number = isPositive ? 1 : -1;

  return value + sign * message.length;
}

console.log(calculate());
