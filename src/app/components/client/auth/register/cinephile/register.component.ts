import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';
import { Gender } from 'src/app/core/models/user-profile.model';
import { Customer } from 'src/app/core/models/user-profile.model';

const dniPattern = /^[0-9]{8}$/;
const phonePattern = /^[0-9]{9}$/;


@Component({
  selector: 'auth-register-cinephile',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  empUserForm: FormGroup;
  exist: boolean = false;
  hide = true;

  genders: Gender[] = [];

  constructor(
    private _fb: FormBuilder,
    private _empService: CinephileProfileService,

    ) {
    this.empUserForm = this._fb.group(
      {
        first_name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
        ]),
        last_name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(80),
        ]),
        Gender_id: new FormControl('', Validators.required),
        number_dni: new FormControl('', [
          Validators.required,
          Validators.pattern(dniPattern),
        ]),
        birthdate: new FormControl('', Validators.required),
        phone: new FormControl('', [
          Validators.required,
          Validators.pattern(phonePattern),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      },
      { validator: this.passwordMatchValidator }
    );
  }
  
  ngOnInit(){
    this.getUserGender();
  }

  onFormSubmit() {
    if (this.empUserForm.valid) {

      this.empUserForm.value.TypeUser_id = 1 ; // Agregar tipo de usuario

      const selectedGender = this.genders.find(gender => gender.name === this.empUserForm.value.Gender_id);
      if (selectedGender) {
        this.empUserForm.value.Gender_id = selectedGender.id;
      }

      const formValue = { ...this.empUserForm.value }; // Eliminar ConfirmPassword
      delete formValue.confirmPassword;

      this._empService.addPerson(formValue).subscribe({
        next: (addedPerson:any) =>{

          const customerId = addedPerson.id;

          const customer: Customer = {
            id: null,
            Person_id: customerId
          };

          this._empService.addCustomer(customer).subscribe({
            next: (addedCustomer: any) => {
              alert('Account successfully created');
              //this._router.navigateByUrl('/home');
            },
            error: (error: any) => {
              console.error(error);
            }
          });
          
        },
        error: (err:any)=>{
          console.error(err);
        }
      })    
    }
  }

  getUserGender(){
    this._empService.getUserGender().subscribe({
      next: (val:any) =>{
        this.genders = val
      },
      error: (err:any)=>{
        console.error(err);
      }
    })
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
