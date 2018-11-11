import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  guests: Object;
  host: Object;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.getGuests().subscribe(data => {
      this.guests = data;
      console.log(this.guests);
    })

    this.data.getHost().subscribe(data => {
      this.host = data;
      console.log(this.host);
    })
  }


}
