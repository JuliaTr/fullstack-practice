"use strict";
/*
`protected`:
  - property can be read only in parent class and subclasses
  - property can NOT be read outside of the class.
*/
{
    class User {
        _name;
        _age;
        constructor(_name, _age) {
            this._name = _name;
            this._age = _age;
        }
    }
    class Coach extends User {
        sayHi() {
            console.log(`Hi! I am your coach ${this._name}. I am ${this._age}`);
        }
    }
    class Student extends User {
        sayHi() {
            console.log(`Hi! I am a student ${this._name}. I am ${this._age}`);
        }
    }
    class Mentor extends User {
        sayHi() {
            console.log(`Hi! I am your mentor ${this._name}. I am ${this._age}`);
        }
    }
    const misha = new Coach('Misha', 38);
    const petro = new Student('Misha', 57);
    misha.sayHi();
    // Hi! I am your coach Misha. I am 38
    petro.sayHi();
    // Hi! I am a student Misha. I am 57
}
