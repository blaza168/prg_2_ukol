import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fe-functionality',
  templateUrl: './fe-functionality.component.html',
  styleUrls: ['./fe-functionality.component.scss']
})
export class FeFunctionalityComponent implements OnInit {

  public page = 'first';

  public data: any;

  public form: FormGroup;

  constructor() {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }

  public onFormSubmit(): void {
    this.data = this.form.value;
  }

  ngOnInit() {
  }

}
