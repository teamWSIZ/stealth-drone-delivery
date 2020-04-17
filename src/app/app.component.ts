import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  //podłączenie globalnej reakcji na klawisze
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === '`') {
      this.router.navigate(['adm']);
    } else if (event.key === '&') {
      alert('hahaha');
    }
  }

}
