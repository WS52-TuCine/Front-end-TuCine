import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private _fb: FormBuilder,
  ){
    this.empOfferForm = this._fb.group(
      {}
    )
  }

  onFormSubmit(){

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
}
