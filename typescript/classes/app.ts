/*
`public`:
- by default all class properties are public
- we can use property anywhere outside of the class

`private`:
- property canNOT be used ONLY outside the class

`protected`:
- can be used inside the class, classes which inherit from this class
- canNOT be used outside

*/

// Valid
class Point2D {
  public x: number;
  private y: number;
  protected z: number;
  b: number; // public by default


  constructor(x: number, y: number, z: number, b: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.b = b;
  }

  printPosition() {
    const { x, y, z, b } = this;

    console.log(`(${x}, ${y}, ${z}, ${b})`);
  }
}

const a = new Point2D(1, 2, 3, 4);
a.printPosition();

// `public`:
console.log(a.x);

// `private`:
// console.log(a.y); // if uncomment it will be printed in console
// Property 'y' is private and only accessible within class 'Point2D'.

// `protected`:
// console.log(a.z); // if uncomment it will be printed in console
// Property 'z' is protected and only accessible within class 'Point2D' and its subclasses.