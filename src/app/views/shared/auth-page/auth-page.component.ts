import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit{

  parametro: string | undefined;
  selectedTabIndex = 0;
  showCinephileRegister = false;
  showOwnerRegister = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.parametro = params.get('owner') || params.get('cinephile') || '';; // Captura el primer parámetro de la ruta

      console.log (this.parametro)
    });
  }

  redirectToRegisterCinephile() {
    this.selectedTabIndex = 1;
    this.showCinephileRegister = true;
    this.showOwnerRegister = false;
  }

  redirectToRegisterOwner() {
    this.selectedTabIndex = 1;
    this.showCinephileRegister = false;
    this.showOwnerRegister = true;
  }


}
