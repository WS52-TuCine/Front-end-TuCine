import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'client-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  checked = false;
  
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
