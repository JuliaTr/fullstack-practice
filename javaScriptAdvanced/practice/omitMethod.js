function omitMethod() {
  Object.prototype.omit = function omit(keys) {
    const copyThis = { ...this };

    for (const key of keys) {
      delete copyThis[key];
    }

    return copyThis;
  };
}

const robot = {
  wheels: 4,
  name: 'roberto',
  serialNumber: 123,
  coords: {
    x: 0,
    y: 0,
  },
  weight: 40,
}

omitMethod();

console.log(robot.omit(['coords', 'wheels', 'weight'])); 
/*
{
  name: 'roberto',
  serialNumber: 123,
}
*/ 
// Works as expected
