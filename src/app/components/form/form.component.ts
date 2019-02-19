import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formSubmitted = false;
  public form: FormGroup;

  constructor() {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      mark: new FormControl(null, [Validators.required, Validators.max(1), Validators.min(1),
      Validators.pattern('^[0-9]*$')]),
      content: new FormControl(null, Validators.required),
    });
  }

  public onSubmit(): void {
    this.formSubmitted = true;
    this.form.reset();
    this.form.get('name').setErrors(null);
    this.form.get('mark').setErrors(null);
    this.form.get('content').setErrors(null);
  }

  ngOnInit() {
  }

}
