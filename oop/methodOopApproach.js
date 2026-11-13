"use strict";
// OOP approach (incapsulation):
{
    class User {
        name;
        age;
        isCoach;
        constructor(name, age, isCoach) {
            this.name = name;
            this.age = age;
            this.isCoach = isCoach;
        }
        sayHi() {
            let message = 'Hi!';
            if (this.isCoach) {
                message += ` I am your coach ${this.name}.`;
            }
            else {
                message += ` I am a student ${this.name}.`;
            }
            message += ` I am ${this.age}`;
            console.log(message);
        }
    }
    let misha = new User('Misha', 38, true);
    let pedro = new User('Pedro', 57, false);
    misha.sayHi();
    // Hi! I am your coach Misha. I am 38
    pedro.sayHi();
    // Hi! I am a student Pedro. I am 57
}
