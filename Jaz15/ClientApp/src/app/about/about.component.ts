import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { get } from 'scriptjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    get('./js/instafeed.min.js', () => {
      get('./js/custom.js', () => {

      });
    });
  }

}
