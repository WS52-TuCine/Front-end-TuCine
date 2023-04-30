import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  links = ['Explorar', 'Peliculas', 'Cineclubs', 'Promociones', 'Mis grupos'];
  activeLink = this.links[0];

  constructor(public router: Router) { }

}
