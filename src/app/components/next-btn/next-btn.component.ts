import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-next-btn',
  templateUrl: './next-btn.component.html',
  styleUrls: ['./next-btn.component.scss']
})
export class NextBtnComponent implements OnInit {

  @Input() color: string;
  @Input() navigate: string;

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
