const mainCore = {
  getMainInfo() {
    return `Robot ${this.name}, cpu version ${this.cpuVersion}`;
  },
  getAdditionalInfo() {
    return `Update version: ${this.softwareVersion}`;
  },
  updateRobot(updateVersion) {
    return `${this.name} updated to ${this.updateVersion}`;
  },
};

const navigationCore = {
  getCoords() {
    return `x=${this.coords.x} y=${this.coords.y}`;
  },

  setTargetCoords() {
    x = this.coords.x;
    y = this.coords.y;
  },
};

const movementCore = {
  moveForward(step = 1) {
    if (step > 0) {
      this.coords.y += step;
    }

    return this;
  },

  moveBack(step = 1) {
    if (step > 0) {
      this.coords.y -= step;
    }

    return this;
  },

  moveLeft(step = 1) {
    if (step > 0) {
      this.coords.y -= step;
    }

    return this;
  },

  moveRight(step = 1) {
    if (step > 0) {
      this.coords.x += step;
    }

    return this;
  },
};

const kerbin = {
  name: 'Kerbin',
  cpuVersion: 145.4,
  softwareVersion: 23.45,
  coords: {
    x: 0,
    y: 0,
  },
  target: {
    coords: {
      x: 0,
      y: 0,
    },
  },
};

// Use Object.setPrototypeOf
Object.setPrototypeOf(mainCore, kerbin);
Object.setPrototypeOf(movementCore, navigationCore);
