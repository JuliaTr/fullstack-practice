"use strict";
{
    class User {
        _name;
        _age;
        _isCoach;
        _isMentor;
        constructor(_name, _age, _isCoach, _isMentor = false) {
            this._name = _name;
            this._age = _age;
            this._isCoach = _isCoach;
            this._isMentor = _isMentor;
        }
        sayHi() {
            let message = 'Hi!';
            if (this._isCoach) {
                message += ` I am your coach ${this._name}.`;
            }
            else if (this._isMentor) {
                message += ` I am a mentor ${this._name}.`;
            }
            else {
                message += ` I am a student ${this._name}.`;
            }
            message += ` I am ${this._age}`;
            console.log(message);
        }
        sayHello() {
            let message = 'Hello!';
            if (this._isCoach) {
                message += ` I am your coach ${this._name}.`;
            }
            else if (this._isMentor) {
                message += ` I am a mentor ${this._name}.`;
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
    petro.sayHello();
    // Hello! I am a student Petro. I am 57
}
