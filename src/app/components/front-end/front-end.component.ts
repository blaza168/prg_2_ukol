import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss']
})
export class FrontEndComponent implements OnInit {

  public page: string;

  public data: any;

  public form: FormGroup;

  constructor(private title: Title) {
    this.title.setTitle('Klientská část');
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
        name: new FormControl(null, [Validators.required]),
    });
  }

  public onFormSubmit(): void {
    this.data = this.form.value;
  }

  ngOnInit() {
  }

}
