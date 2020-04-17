import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GService {
  admin = false;
  pass = 'secret';
  data = 'https://api.wsi.edu.pl/backend';
  constructor() { }
}
