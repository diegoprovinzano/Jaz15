import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {

  tables: Object;
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

    this.data.getTable().subscribe(data => {
      this.tables = data;
      console.log(this.tables);
    })
  }
}