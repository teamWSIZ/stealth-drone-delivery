import {Simcard} from './simcard';

export class Smartphone {
  name: string;
  price: number;
  is_5G_capable: boolean;
  simcard: Simcard; //kompozycja: klasa Smartphone ma dostęp do klasy Simcard


  constructor(name: string, price: number, is_5G_capable: boolean = false) {
    this.name = name;
    this.price = price;
    this.is_5G_capable = is_5G_capable;
    this.simcard = undefined;
  }

  verbose(): string {
    return `Phone(name:${this.name}, price:${this.price}, 5G:${this.is_5G_capable})`;
  }

  simcard_simcard() {
    //trzeba sprawdzić czy czasem już nie mamy simcard-y....

  }

}
