

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    console.log('Tworzymy instancję klasy Person')
    this.name = name;
    this.age = age;
  }
}

let print_person = (arg: Person) => {
  if (arg.age === undefined) {
    console.log(`Osoba: nazwisko:${arg.name}, wiek: nie podano`);
  } else {
    console.log(`Osoba: nazwisko:${arg.name}, wiek: ${arg.age}`);
  }
}

let p = new Person('Sun Tzu', 67);
print_person(p);

let p2 = new Person('Ramses', undefined);
print_person(p2);

