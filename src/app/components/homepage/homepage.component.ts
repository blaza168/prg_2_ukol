import {Component, Input, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private title: Title, public router: Router) {
    this.title.setTitle('Jak fungují moderní webové stránky | Jan Blažek');
  }

  ngOnInit() {
  }

}
