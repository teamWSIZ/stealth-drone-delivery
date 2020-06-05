import { Component, OnInit } from '@angular/core';
import {CardData} from '../_model/card-data';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  cards: CardData[] = [];
  editedCard: CardData = new CardData('','','');

  constructor(private http: HttpClient) { }


  ngOnInit() {
    // this.cards = [];

    this.http.get<CardData[]>('http://10.10.0.200:8070/cards').subscribe(cc => {
      this.cards = cc;
    });


    //
    // this.cards.push(new CardData('Produkt 1', 'Informacje o nowym produkcie 1', 'https://produckt8.jpg'));
    // this.cards.push(new CardData('Produkt 2', 'Informacje o nowym produkcie 2', 'https://produckt8.jpg'));
    // this.cards.push(new CardData('Produkt 3', 'Informacje o nowym produkcie 3', 'https://produckt8.jpg'));
    // this.cards.push(new CardData('Produkt 4', 'Informacje o nowym produkcie 4', 'https://produckt8.jpg'));
    // this.cards.push(new CardData('Produkt 4', 'Informacje o nowym produkcie 4', 'https://produckt8.jpg'));
    // this.cards.push(new CardData('Produkt 4', 'Informacje o nowym produkcie 4', 'https://produckt8.jpg'));
    // this.cards.push(new CardData('Produkt 4', 'Informacje o nowym produkcie 4', 'https://produckt8.jpg'));
    // this.cards.push(new CardData('Produkt 4', 'Informacje o nowym produkcie 4', 'https://produckt8.jpg'));
    // this.cards.push(new CardData('Produkt 4', 'Informacje o nowym produkcie 4', 'https://produckt8.jpg'));
    // this.cards.push(new CardData('Produkt 4', 'Informacje o nowym produkcie 4', 'https://produckt8.jpg'));
  }

  edit_card(c: CardData) {
    this.editedCard = c;
  }

  cancel() {

  }

  accept() {

  }
}
