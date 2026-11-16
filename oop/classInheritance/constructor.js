"use strict";
{
    class User {
        _name;
        _age;
        _isCoach;
        constructor(_name, _age, _isCoach) {
            this._name = _name;
            this._age = _age;
            this._isCoach = _isCoach;
        }
        sayHi() {
            let message = 'Hi!';
            if (this._isCoach) {
                message += ` I am your coach ${this._name}.`;
            }
            else {
                message += ` I am a student ${this._name}.`;
            }
            message += ` I am ${this._age}`;
            console.log(message);
        }
    }
    const misha = new User('Misha', 38, true);
    const petro = new User('Petro', 57, false);
    misha.sayHi();
    // Hi! I am your coach Misha. I am 38
    petro.sayHi();
    // Hi! I am a student Petro. I am 57
}
