import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
})
export class CustomInputComponent {
  @Input()
    controlName!: string;
  @Input()
    label!: string;
  @Input()
    isFormSubmitted!: boolean;
  @Input()
    form!: FormGroup;
  @Input()
    errorMessage!: string;

  get control() {
    return this.form.get(this.controlName);
  }
}

