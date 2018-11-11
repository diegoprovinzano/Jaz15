import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  id: number;
  name: string;
  table: Object;
  chair: number[];  

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
