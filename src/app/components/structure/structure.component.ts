import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {trigger, animate, transition, style} from '@angular/animations';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Dělení aplikace');
  }

  ngOnInit() {
  }

}
