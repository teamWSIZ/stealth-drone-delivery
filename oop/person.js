"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age) {
        console.log('Tworzymy instancję klasy Person');
        this.name = name;
        this.age = age;
        this.smartphones = [];
    }
    //to jest metoda
    Person.prototype.verbose = function () {
        return "Osoba(" + this.name + "," + this.age + ",smartphones:" + JSON.stringify(this.smartphones) + ")";
    };
    Person.prototype.rename = function (newname) {
        // metoda zmieniająca nazwę osoby
    };
    Person.prototype.celebrate_birthday = function () {
        // metoda de facto zwiększająca wiek o 1 ...
        // jak undefined to ... ?
        console.log("Osoba " + this.name + " imprezuje z okazji swoich " + (this.age + 1) + " urodzin");
        this.age += 1;
    };
    Person.prototype.add_smartphone = function (phone) {
        //to powinien być jedyny sposób dodawania telefonów osobom...
        this.smartphones.push(phone);
    };
    return Person;
}());
exports.Person = Person;
