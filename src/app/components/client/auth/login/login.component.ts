import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cinephile } from 'src/app/core/models/cinephile.model';

@Component({
  selector: 'client-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  empOfferForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  checked = false;
  perfil: Cinephile[] = [];
  searchQuery = '';


  constructor(
    private _fb: FormBuilder,
    private router: Router
  ){
    this.empOfferForm = this._fb.group(
      {}
    )
  }

  onFormSubmit(){
    if (this.empOfferForm.valid) {
      this.router.navigate(['dashboard']);
    }
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar tu correo';
    }

    return this.email.hasError('email') ? 'No es un correo válido' : '';
  }

  getPasswordErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar tu correo';
    }

    return this.email.hasError('email') ? 'No es un correo válido' : '';
  }

  redirectToViewProfile(){
    this.router.navigate(['/perfil/:id']);
  }
}
