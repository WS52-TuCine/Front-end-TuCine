import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Gender } from 'src/app/core/models/user-profile.model';
import { BusinessType } from 'src/app/core/models/cineclub.model';
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
