/*
We can simplify the production of new robot types with 
**inheritance**. Hence, we decided to take the 
constructor from the **Robot constructor** task, 
rename it to BaseRobot and use as our base for new 
constructors.

Create the `CargoRobot` constructor that:

- Calls `BaseRobot`.
- Adds a `trunk` and a `maxTrunkCapacity` fields to new robots.

All `BaseRobot.prototype` methods must be available to 
new robots (through inheritance).
*/

function BaseRobot(name) {
  this.name = name;
  this.coords = {};
  this.coords.x = 0;
  this.coords.y = 0;
}

BaseRobot.prototype.goForward = function() {
  this.coords.y += 1;

  return this;
};

BaseRobot.prototype.goBack = function() {
  this.coords.y -= 1;

  return this;
};

BaseRobot.prototype.goLeft = function() {
  this.coords.x -= 1;

  return this;
};

BaseRobot.prototype.goRight = function() {
  this.coords.x += 1;

  return this;
};

function CargoRobot(name, maxTrunkCapacity) {
  // keep this line to call BaseRobot constructor for each new CargoRobot
  BaseRobot.call(this, name);

  this.trunk = [];
  this.maxTrunkCapacity = maxTrunkCapacity;
}

// don't forget to inherit BaseRobot.prototype for CargoRobot.prototype
Object.setPrototypeOf(CargoRobot.prototype, BaseRobot.prototype);

const mike = new CargoRobot('mike', 10);

mike.goRight();
mike.goRight();
mike.goBack();

console.log(mike)
/*
{
  name: 'mike',
  coords: {
    x: 2,
    y: -1,
  },
  trunk: [],
  maxTrunkCapacity: 10,
}
*/

// Works as expected
