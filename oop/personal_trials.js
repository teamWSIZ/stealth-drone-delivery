"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var p = new person_1.Person('Sun Tzu', 67);
var p2 = new person_1.Person('Ramses', undefined);
// console.log(p.verbal());
var users = [p, p2]; //to będzie tablica osób... tu deklaracja, oraz explicite podanie typu
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var u = users_1[_i];
    console.log(u.verbose());
}
p.celebrate_birthday();
p2.celebrate_birthday();
users[0].celebrate_birthday();
console.log(p.verbose());
console.log(JSON.stringify(p)); //to pozwala na szybkie wypisanie danych w instancji klasy
p.smartphones[0].is_5G_capable = true; //to bardzo nieładna akcja... nie powinna być możliwa... ale jest...
//tzn. dowolny kod mający dostęp do instancji klasy Person może
//zmienić techniczne możliwości jej telefonu...
