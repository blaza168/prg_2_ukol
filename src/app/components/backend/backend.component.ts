import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Servrová část');
  }

  ngOnInit() {
  }

}
