import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }
  links = ['Explorar', 'Peliculas', 'Cineclubs', 'Promociones', 'Mis grupos'];
  activeLink = this.links[2];



}
