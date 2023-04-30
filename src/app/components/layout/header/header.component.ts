import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  links = ['Explorar', 'Peliculas', 'Cineclubs', 'Promociones', 'Mis grupos'];
  activeLink = this.links[0];

}
