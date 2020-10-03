console.log("hello!");
//prosty przykład klasy
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var print_A = function (arg) {
    console.log("instancja A: name:" + arg.name + ", z rang\u0105: " + arg.rank);
};
var a = new A(); // tworzy instancję klasy
a.name = 'Abra Kadabra'; //przypisanie do pola klasy wartości
a.rank = 37;
console.log(a.name);
var b = new A(); //druga instancja klasy A
b.name = 'Sun Tzu';
b.rank = 1000;
console.log(b.name);
console.log(a.name);
///------------------
print_A(a);
print_A(b);
