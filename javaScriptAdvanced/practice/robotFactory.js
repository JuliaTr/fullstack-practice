class BaseRobot {
  constructor(name, weight, coords, chipVersion) {
    this.name = name;
    this.weight = weight;
    this.coords = coords;
    this.coords.x = 0;
    this.coords.y = 0;
    this.chipVersion = chipVersion;
  }

  goForward(step = 1) {
    if (step > 0) {
      this.coords.y += step;
    }

    return this;
  }

  goBack(step = 1) {
    if (step > 0) {
      this.coords.y -= step;
    }

    return this;
  }

  goRight(step = 1) {
    if (step > 0) {
      this.coords.x += step;
    }

    return this;
  }

  goLeft(step = 1) {
    if (step > 0) {
      this.coords.x -= step;
    }

    return this;
  }

  getInfo() {
    return `Robot: ${this.name}, Chip version: ${this.chipVersion}, Weight: ${this.weight}`;
  }
}

class FlyingRobot extends BaseRobot {
  constructor(name, weight, coords, chipVersion, z = 0) {
    super(name, weight, coords, chipVersion);

    this.coords.z = z;
  }

  goUp(step = 1) {
    if (step > 0) {
      this.coords.z += step;
    }

    return this;
  }

  goDown(step = 1) {
    if (step > 0) {
      this.coords.z += step;
    }

    return this;
  }
}

class DeliveryDrone extends FlyingRobot {
  constructor(name, weight, coords, chipVersion, z = 0, maxLoadWeight, currentLoad) {
    super(name, weight, coords, chipVersion, z = 0);

    this.maxLoadWeight = null || maxLoadWeight;
    this.currentLoad = null || currentLoad;
  }

  hookLoad(cargo) {
    if (this.currentLoad === null 
        || cargo.weight <= maxLoadWeight) {
      this.currentLoad = cargo;
    }

    return this;
  }

  unhookLoad() {
    this.currentLoad = null;
    return this;
  }
}

const position = { x: 0, y: 0 };
const robot = new BaseRobot('Elon', 93, position, 0.1);
console.log(robot);

/*
DeliveryDrone {
  name: string
  weight: number
  chipVersion: number
  maxLoadWeight: number
  currentLoad: null || {
    weight: number
    description: string
  }
  coords: {
    x: number
    y: number
    z: number
  }
}
*/
