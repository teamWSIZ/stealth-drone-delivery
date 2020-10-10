import {Smartphone} from './smartphone';
let l = (s) => console.log(s);

let phone = new Smartphone('MyPhone', 12);
l(phone.name);
l(phone.verbose());
