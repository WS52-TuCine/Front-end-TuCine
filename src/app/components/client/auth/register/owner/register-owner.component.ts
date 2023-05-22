import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';

const dniPattern = /^[0-9]{8}$/;
const phonePattern = /^[0-9]{9}$/;

interface Genre {
  id: string;
  label: string;
}

interface Cineclub {
  id: string;
  label: string;
}

@Component({
  selector: 'auth-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.scss']
})
export class RegisterOwnerComponent {

  hide = true;

  genres: Genre[] = [
    { id: 'F', label: 'Femenino' },
    { id: 'M', label: 'Masculino' },
    { id: 'O', label: 'Otros' },
  ];

  cineclubs: Cineclub[] = [
    { id: 'AC', label: 'AutoCinema' },
    { id: 'BC', label: 'Bar-Cine' },
    { id: 'CC', label: 'Café-Cine' },
  ];

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
  });

  secondFormGroup = this._formBuilder.group({
    businessName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(phonePattern),
    ]),
    description: new FormControl('', Validators.required),
    businessEmail: new FormControl('', [Validators.required, Validators.email]),
    socialReason: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    RUC: new FormControl('', [
      Validators.required,
      Validators.pattern(phonePattern),
    ]),
    bankAccount: new FormControl('', Validators.required),
    typeCineclub: new FormControl('', Validators.required),
  },
  
  );

  thirdFormGroup = this._formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  },
  { validator: this.passwordMatchValidator }
  );

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

  }
}
