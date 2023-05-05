import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

export interface Topic {
  name: string;
}

@Component({
  selector: 'groups-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  //Stepper
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  //Chips
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  topics: Topic[] = [{name: 'Anime'}, {name: 'Action'}, {name: 'Adventure'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our topic
    if (value) {
      this.topics.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(topic: Topic): void {
    const index = this.topics.indexOf(topic);

    if (index >= 0) {
      this.topics.splice(index, 1);
    }
  }

  edit(topic: Topic, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove topic if it no longer has a name
    if (!value) {
      this.remove(topic);
      return;
    }

    // Edit existing fruit
    const index = this.topics.indexOf(topic);
    if (index >= 0) {
      this.topics[index].name = value;
    }
  }

  submit(){
    console.log(this.firstFormGroup)
    console.log(this.secondFormGroup)
    console.log(this.thirdFormGroup)
    console.log(this.fourthFormGroup)
  }


}
