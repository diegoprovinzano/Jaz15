import { Component, OnInit } from '@angular/core';
import { Table } from './table';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  tables: Table[];

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getTables();
  }
}
