import { Component, OnInit, Input } from '@angular/core';
import { Table } from './table';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  table: Table[];

  @Input('tablename') tablename: number;

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getTable(this.tablename).subscribe(data => this.table = data);
  }
}
