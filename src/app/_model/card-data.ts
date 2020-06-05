export class CardData {
  //paczka -- cała informacja potrzebna do wyświetlenia kartki produktowej, lub wpisu na blogu
  title: string;
  text: string;
  imgUrl: string;


  constructor(title: string, text: string, imgUrl: string) {
    this.title = title;
    this.text = text;
    this.imgUrl = imgUrl;
  }
}
