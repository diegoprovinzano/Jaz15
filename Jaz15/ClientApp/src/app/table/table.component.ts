import { Component, OnInit, Input } from '@angular/core';
import { Table } from './table';
import { TableService } from './table.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  table: Table[];
  isParam: boolean;
  private sub: any;
  private isMobileResolution: boolean;
  panelOpenState = false;

  @Input() tablename: number;

  constructor(private route: ActivatedRoute,
              private tableService: TableService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      if (params['tablename']) {
        this.tablename = params['tablename'];
        this.isParam = true;
      }
    });

    this.tableService.getTable(this.tablename).subscribe(
      data => {
      this.table = data;
     });

     this.getIsMobileResolution();
  }

  public getIsMobileResolution(): boolean {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
    return this.isMobileResolution;
  }
}
