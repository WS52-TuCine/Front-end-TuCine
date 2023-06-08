import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { Cinephile } from 'src/app/core/models/cinephile.model';

@Component({
  selector: 'client-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  empLoginForm: FormGroup;
  
  hide = true;
  checked = false;
  perfil: Cinephile[] = [];
  searchQuery = '';


  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _empService: CinephileProfileService,
  ){
    this.empLoginForm = this._fb.group(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
      }
    )
  }

  onFormSubmit(){
    if (this.empLoginForm.valid) {
      this._empService.validateCredentials(this.empLoginForm.value.email, this.empLoginForm.value.password).subscribe({
        next: (result) => {
          if (result.valid) {
            console.log('Las credenciales coinciden');
            console.log(result.user);
            localStorage.setItem('userResult', JSON.stringify(result.user));
            this.router.navigate(['dashboard']);
          }
        },
      })
      
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
