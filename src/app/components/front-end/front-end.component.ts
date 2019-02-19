import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {FeFunctionalityComponent} from '../fe-functionality/fe-functionality.component';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss']
})
export class FrontEndComponent implements OnInit {

  constructor(private title: Title, private dialog: MatDialog) {
    this.title.setTitle('Klientská část');
    this.buildForm();
  }

  public onExamplesClick(): void {
    this.dialog.open(FeFunctionalityComponent, {
      width: '75%',
    });
  }

  private buildForm(): void {
  }

  ngOnInit() {
  }

}
