import {Component, Input, OnInit} from '@angular/core';
import {CardData} from '../_model/card-data';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {
  @Input()
  info: CardData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  delete_card() {
    this.http.delete('http://10.10.0.200:8070/cards/delete?id=' + this.info.id).subscribe(cc => {
      alert('element usunięty z serwisu backendowego');
    });
  }

}
