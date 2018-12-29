import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    get('./assets/js/instafeed.min.js', () => {
      get('./assets/js/jquery.magnific-popup.min.js', () => {
        get('./assets/js/custom.js', () => {

        });
      });
    });
  }

}
