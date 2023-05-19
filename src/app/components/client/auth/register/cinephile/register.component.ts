import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';

const dniPattern = /^[0-9]{8}$/;
const phonePattern = /^[0-9]{9}$/;

interface Genre {
  id: string;
  label: string;
}

@Component({
  selector: 'cinephile-auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  empOfferForm: FormGroup;
  exist: boolean = false;
  hide = true;

  genres: Genre[] = [
    { id: 'F', label: 'Femenino' },
    { id: 'M', label: 'Masculino' },
    { id: 'O', label: 'Otros' },
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: CinephileProfileService,

    ) {
    this.empOfferForm = this._fb.group(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
        ]),
        genre: new FormControl('', Validators.required),
        documentNumber: new FormControl('', [
          Validators.required,
          Validators.pattern(dniPattern),
        ]),
        birthdate: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', [
          Validators.required,
          Validators.pattern(phonePattern),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        confirmEmail: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      },
      { validator: this.passwordMatchValidator }
    );
  }
  

  onFormSubmit() {
    if (this.empOfferForm.valid) {
      
        this._empService.getCinephileList().subscribe({
          next: (val) =>{
            this.exist = false

            for(let i= 0; i< val.length ;i++){
              if( this.empOfferForm.value.email == val[i].email) {
                alert('El email ya fue registrado')
                this.exist = true
                break;
              }
            }

            if (this.exist == false){
              this._empService.addCinephile(this.empOfferForm.value).subscribe({
                next: (val:any) =>{
                  alert('Food Truck added')
                  //this._router.navigateByUrl('/home');
                },
                error: (err:any)=>{
                  console.error(err);
                }
              })      
            }
          }
        })


    }
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ mismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  
    return null;
  };
  

}
