//prosty przykład klasy
class A {
  name: string;
  rank: number;
}


let print_A = (arg: A) => {
  console.log(`instancja A: name:${arg.name}, z rangą: ${arg.rank}`);
};

let a = new A();  // tworzy instancję klasy
a.name = 'Abra Kadabra'; //przypisanie do pola klasy wartości
a.rank = 37;


console.log(a.name);

let b = new A();  //druga instancja klasy A
b.name = 'Sun Tzu';
b.rank = 1000;
console.log(b.name);
console.log(a.name);
///------------------
print_A(a);
print_A(b);


