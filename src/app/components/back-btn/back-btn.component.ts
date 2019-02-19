import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss']
})
export class BackBtnComponent implements OnInit {

  @Input() color: string;
  @Input() navigate: string;

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
