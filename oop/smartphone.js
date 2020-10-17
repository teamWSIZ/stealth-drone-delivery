"use strict";
exports.__esModule = true;
var Smartphone = /** @class */ (function () {
    function Smartphone(name, price, is_5G_capable) {
        if (is_5G_capable === void 0) { is_5G_capable = false; }
        this.name = name;
        this.price = price;
        this.is_5G_capable = is_5G_capable;
        this.simcard = undefined;
    }
    Smartphone.prototype.verbose = function () {
        return "Phone(name:" + this.name + ", price:" + this.price + ", 5G:" + this.is_5G_capable + ")";
    };
    Smartphone.prototype.simcard_simcard = function () {
        //trzeba sprawdzić czy czasem już nie mamy simcard-y....
    };
    return Smartphone;
}());
exports.Smartphone = Smartphone;
