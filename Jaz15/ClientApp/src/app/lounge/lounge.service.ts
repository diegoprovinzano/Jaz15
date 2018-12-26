import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from '../table/table';
import { TableService } from '../table/table.service';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoungeService {
  tables: Table[];

  constructor(private http: HttpClient,
              private tableService: TableService) { }


}
