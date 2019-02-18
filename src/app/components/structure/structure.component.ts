import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {trigger, animate, transition, style} from '@angular/animations';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('1000ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class StructureComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Dělení aplikace');
  }

  ngOnInit() {
  }

}
