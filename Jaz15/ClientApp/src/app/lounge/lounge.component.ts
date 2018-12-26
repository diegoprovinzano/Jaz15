import { Component, OnInit } from '@angular/core';
import { Table } from '../table/table';
import { Guest } from '../guest/guest';
import { Host } from '../host/host';

@Component({
  selector: 'app-lounge',
  templateUrl: './lounge.component.html',
  styleUrls: ['./lounge.component.css']
})
export class LoungeComponent implements OnInit {

  host: Host;
  tables: Table[];
  guests: Guest[];

  constructor() { }

  ngOnInit() {
  }

}
