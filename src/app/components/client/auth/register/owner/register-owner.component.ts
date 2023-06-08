import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Gender } from 'src/app/core/models/user-profile.model';
import { Person } from 'src/app/core/models/user-profile.model';
import { Owner } from 'src/app/core/models/user-profile.model';
import { BusinessType } from 'src/app/core/models/cineclub.model';
import { Business } from 'src/app/core/models/cineclub.model';
import { CinephileProfileService } from 'src/app/core/services/auth/cinephile/cinephile-profile.service';

const dniPattern = /^[0-9]{8}$/;
const phonePattern = /^[0-9]{9}$/;
const RUCPattern = /^[0-9]{11}$/;

@Component({
  selector: 'auth-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.scss']
})
export class RegisterOwnerComponent implements OnInit {

  hide = true;
  genders: Gender[] = [];
  cineclubs: BusinessType[] = [];

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

  firstFormGroup = this._formBuilder.group({
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
  });

  secondFormGroup = this._formBuilder.group({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(phonePattern),
    ]),
    social_reason: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    RUC: new FormControl('', [
      Validators.required,
      Validators.pattern(RUCPattern),
    ]),
    bank_account: new FormControl('', Validators.required),
    BusinessType_id: new FormControl('', Validators.required),
  },);

  thirdFormGroup = this._formBuilder.group({
    image_logo: new FormControl('', Validators.required),
    image_banner: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date_attention: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    reference_address: new FormControl('', Validators.required),
  });

  fourthFormGroup = this._formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  },
  { validator: this.passwordMatchValidator }
  );

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    private _empService: CinephileProfileService,
    breakpointObserver: BreakpointObserver
    ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
    }

  ngOnInit(){
    this.getUserGender();
    this.getBusinessTypeList();
  }

  onFormSubmit(){
    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid && this.fourthFormGroup.valid ){
      const formDataPerson: Person = {
        id: null,
        first_name: this.firstFormGroup.get('first_name')?.value as string,
        last_name: this.firstFormGroup.get('last_name')?.value as string,
        Gender_id: this.firstFormGroup.get('Gender_id')?.value,
        number_dni: this.firstFormGroup.get('number_dni')?.value as string,
        birthdate: this.firstFormGroup.get('birthdate')?.value as string,
        phone: this.firstFormGroup.get('phone')?.value as string,
        email: this.fourthFormGroup.get('email')?.value,
        password: this.fourthFormGroup.get('password')?.value,
        TypeUser_id: 2
      }

      this._empService.addPerson(formDataPerson).subscribe({
        next: (addedPerson:any) =>{

          const formDataOwner: Owner = {
            id: null,
            Person_id: addedPerson.id,
            bank_account: this.secondFormGroup.get('bank_account')?.value as string,
          };

          this._empService.addOwner(formDataOwner).subscribe({
            next: (addedOwner: any) =>{
              const formDataBusiness: Business = {
                id: null,
                name: this.secondFormGroup.get('name')?.value as string,
                social_reason: this.secondFormGroup.get('social_reason')?.value as string,
                RUC: this.secondFormGroup.get('RUC')?.value as string,
                phone: this.secondFormGroup.get('phone')?.value as string,
                email: this.fourthFormGroup.get('email')?.value as string,
                image_logo: this.thirdFormGroup.get('image_logo')?.value as string,
                image_banner: this.thirdFormGroup.get('image_banner')?.value as string,
                description: this.thirdFormGroup.get('description')?.value as string,
                date_attention: this.thirdFormGroup.get('date_attention')?.value as string,
                address: this.thirdFormGroup.get('address')?.value as string,
                reference_address: this.thirdFormGroup.get('reference_address')?.value as string,
                Owner_id: addedOwner.id,
                BusinessType_id: this.secondFormGroup.get('BusinessType_id')?.value,
              };
              this._empService.addBusiness(formDataBusiness) .subscribe({
                next: (addedBusiness: any) => {
                  console.log(addedBusiness)
                  alert('Account successfully created');
                  //this._router.navigateByUrl('/home');
                },
                error: (error: any) => {
                  console.error(error);
                }
              })
            },
            error: (error: any) => {
              console.error(error);
            }
          })
        },
        error: (error: any) => {
          console.error(error);
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

  getBusinessTypeList(){
    this._empService.getBusinessTypeList().subscribe({
      next: (val:any) =>{
        this.cineclubs = val
      },
      error: (err:any)=>{
        console.error(err);
      }
    })
  }
}
