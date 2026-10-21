"use strict";
/*
Access modifiers:
- for classes and methods

- `public`, `private`, `protected`

`public`:
- for classes and methods
- by default all class fields and methods are public
- we can use property anywhere outside of the class

`private`:
- for classes and methods
- property canNOT be used ONLY outside the class

`protected`:
- for classes and methods
- can be used inside the class, classes which inherit from this class
- canNOT be used outside
- `readonly` and `protected readonly` work the same


`readonly` modifier:
- makes the fiels read-only
- can be combined with any access modifiers


`abstract` (Abstract Class):
- is added to the class when I don't want to let to create objects of this class
- it contains basic interface
- cannot create instance of an abstract class


`implements` (keyword):
- class should always use implemented inteface (its all properties)
- can implement many interfaces
*/
class Point2D {
    x;
    y;
    constructor(
    // `readonly` and `protected readonly` work the same
    x, y) {
        this.x = x;
        this.y = y;
    }
    printPosition() {
        const { x, y } = this;
        console.log(`(${x}, ${y})`);
    }
}
class Point3D extends Point2D {
    z;
    constructor(x, y, z = 0) {
        super(x, y);
        this.z = z;
    }
    print3DPosition() {
        const { x, y, z } = this;
        console.log(`(${x}, ${y}, ${z})`);
    }
}
class Place extends Point2D {
    name;
    constructor(name, x, y) {
        super(x, y);
        this.name = name;
    }
}
const a = new Point3D(1, 2);
a.printPosition();
console.log(a.x);
print2DInfo(a);
function print2DInfo(point) {
    const { x, y } = point;
    console.log(`(${x}, ${y})`);
}
// // Valid
// abstract class Point2D {
//   constructor(
//     // `readonly` and `protected readonly` work the same
//     readonly x: number, 
//     public y: number,
//   ) {}
//   printPosition() {
//     const { x, y} = this;
//     console.log(`(${x}, ${y})`);
//   }
// }
// class Point3D extends Point2D {
//   constructor(
//     x: number, 
//     y: number, 
//     public z = 0,
//   ) {
//     super(x, y);
//   }
//   print3DPosition() {
//     const { x, y, z } = this;
//     console.log(`(${x}, ${y}, ${z})`);
//   }
// }
// class Place extends Point2D {
//   constructor(public name: string, x: number, y: number) {
//     super(x, y);
//   }
// }
// const a = new Point3D(1, 2);
// a.printPosition();
// // Valid
// class Point2D {
//   constructor(
//     // `readonly` and `protected readonly` work the same
//     readonly x: number, 
//     public y: number,
//   ) {}
//   printPosition() {
//     const { x, y} = this;
//     console.log(`(${x}, ${y})`);
//   }
// }
// const a = new Point2D(1, 2);
// a.printPosition()
// // Valid subclass
// class Point3D extends Point2D {
//   constructor(
//     x: number, 
//     y: number, 
//     public z: number
//   ) {
//     super(x, y);
//   }
//   print3DPosition() {
//     const { x, y, z } = this;
//     console.log(`(${x}, ${y}, ${z})`);
//   }
// }
// // Valid
// class Point2D {
//   constructor(
//     public x: number, 
//     public y: number,
//   ) {}
//   printPosition() {
//     const { x, y} = this;
//     console.log(`(${x}, ${y})`);
//   }
// }
// const a = new Point2D(1, 2);
// a.printPosition()
// // Valid subclass
// class Point3D extends Point2D {
//   constructor(
//     x: number, 
//     y: number, 
//     public z: number
//   ) {
//     super(x, y);
//   }
//   print3DPosition() {
//     const { x, y, z } = this;
//     console.log(`(${x}, ${y}, ${z})`);
//   }
// }
// // Valid
// class Point2D {
//   constructor(
//     public x: number, 
//     public y: number,
//   ) {}
//   printPosition() {
//     const { x, y} = this;
//     console.log(`(${x}, ${y})`);
//   }
// }
// const a = new Point2D(1, 2);
// a.printPosition()
// // Valid subclass
// class Point3D extends Point2D {
//   constructor(
//     x: number, 
//     y: number, 
//     public z: number
//   ) {
//     super(x, y);
//     this.z = z; // will work without this line
//   }
//   print3DPosition() {
//     const { x, y, z } = this;
//     console.log(`(${x}, ${y}, ${z})`);
//   }
// }
// // Valid
// class Point2D {
//   // shorthand
//   constructor(
//     public x: number, 
//     private y: number, 
//     protected z: number, 
//     public b: number
//   ) {}
//   printPosition() {
//     const { x, y, z, b } = this;
//     console.log(`(${x}, ${y}, ${z}, ${b})`);
//   }
// }
// const a = new Point2D(1, 2, 3, 4);
// a.printPosition();
// // Examples:
// // Valid
// class Point2D {
//   public x: number;
//   private y: number;
//   protected z: number;
//   b: number; // public by default
//   constructor(x: number, y: number, z: number, b: number) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//     this.b = b;
//   }
//   printPosition() {
//     const { x, y, z, b } = this;
//     console.log(`(${x}, ${y}, ${z}, ${b})`);
//   }
// }
// const a = new Point2D(1, 2, 3, 4);
// a.printPosition();
// // `public`:
// console.log(a.x);
// // `private`:
// // console.log(a.y); // if uncomment it will be printed in console
// // Property 'y' is private and only accessible within class 'Point2D'.
// // `protected`:
// // console.log(a.z); // if uncomment it will be printed in console
// // Property 'z' is protected and only accessible within class 'Point2D' and its subclasses.
