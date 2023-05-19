import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';

interface Genre {
  id: string;
  label: string;
}


interface Cineclub {
  id: string;
  label: string;
}

@Component({
  selector: 'owner-auth-register',
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

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
