"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var smartphone_1 = require("./smartphone");
var p = new person_1.Person('Ramses', 25);
var telefon_egipski = new smartphone_1.Smartphone('Samsung', 400);
var telefon_eksperymentalny = new smartphone_1.Smartphone('Samsung', 600, true);
//teraz dodamy Ramzesowi telefon
p.add_smartphone(telefon_egipski);
p.add_smartphone(telefon_eksperymentalny);
console.log(p.verbose());
