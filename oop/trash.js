var Person = /** @class */ (function () {
    function Person(name, age) {
        console.log('Tworzymy instancję klasy Person');
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var print_person = function (arg) {
    if (arg.age === undefined) {
        console.log("Osoba: nazwisko:" + arg.name + ", wiek: nie podano");
    }
    else {
        console.log("Osoba: nazwisko:" + arg.name + ", wiek: " + arg.age);
    }
};
var p = new Person('Sun Tzu', 67);
print_person(p);
var p2 = new Person('Ramses', undefined);
print_person(p2);
