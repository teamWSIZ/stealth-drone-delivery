"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var smartphone_1 = require("./smartphone");
var p = new person_1.Person('Hu Xiaomi', 50);
p.add_smartphone(new smartphone_1.Smartphone('nn', 100, false));
// console.log(p.smartphones.length);
p.smartphones[0].is_5G_capable = true;
console.log(p.smartphones[0].is_5G_capable);
