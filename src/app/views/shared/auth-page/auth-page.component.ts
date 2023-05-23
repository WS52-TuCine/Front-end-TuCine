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
      this.parametro = params.get('owner') || params.get('cinephile') || '';; 

      console.log (this.parametro)

      this.redirectToRegisterCinephile();
      this.redirectToRegisterOwner()

    });
  }

  redirectToRegisterCinephile() {

    if (this.parametro == ":cinephile"){
      this.showCinephileRegister = true;
      this.showOwnerRegister = false;
    }

  }

  redirectToRegisterOwner() {

    if (this.parametro == ":owner"){
      this.showCinephileRegister = false;
      this.showOwnerRegister = true; 
    }

  }


}
