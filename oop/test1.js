"use strict";
exports.__esModule = true;
var smartphone_1 = require("./smartphone");
var l = function (s) { return console.log(s); };
var phone = new smartphone_1.Smartphone('MyPhone', 12);
l(phone.name);
l(phone.verbose());
