import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  appTitle: Object;

  constructor(private data: DataService) { }

  ngOnInit() {    
    this.data.getHost().subscribe(data => {
      this.appTitle = data;      
      console.log(this.appTitle);
    })
  }

}
