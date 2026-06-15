function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    count++;

    const odd = count % 2 !== 0;

    if (count < 4 || odd) {
      return (b) => x + b;
    }

    return () => 'Bzzz... Error!';
  };
}

const robot = makeRobotAccountant();

console.log(robot(5)(6)); // === 11;
console.log(robot(1)(3)); // === 4;
console.log(robot(6)(6)); //=== 12;
console.log(robot(55)(16)); // === 'Bzzz... Error!';
console.log(robot(55)(16)); // === 71;
console.log(robot(55)(17)); // === 'Bzzz... Error!';
console.log(robot(5)(17)); // === 22;
console.log(robot(1)(1)); // === 'Bzzz... Error!';

// Works as expected
