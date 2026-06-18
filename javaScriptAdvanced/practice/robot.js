function Robot(name) {
  this.name = name;
  this.coords = {};
  this.coords.x = 0;
  this.coords.y = 0;
};

Robot.prototype = {
  goForward(step = 1) {
    if (step > 0) {
      this.coords.y += step;
    }

    return this;
  },

  goBack(step = 1) {
    if (step > 0) {
      this.coords.y -= step;
    }

    return this;
  },

  goLeft(step = 1) {
    if (step > 0) {
      this.coords.x -= step;
    }

    return this;
  },

  goRight(step = 1) {
    if (step > 0) {
      this.coords.x += step;
    }

    return this;
  },
};

const robert = new Robot('robert');

console.log(robert);
/*
{
  name: 'robert',
  coords: {
    x: 0,
    y: 0,
  }
}
*/

console.log(robert.goForward()); // robert.coords.y === 1
console.log(robert.goRight()); // robert.coords.x === 1
// Works as expected
