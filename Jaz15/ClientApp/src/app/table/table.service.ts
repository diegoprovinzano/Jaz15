import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from './table';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  url = 'http://localhost:42001/api/';

  constructor(private http: HttpClient) { }

  getTable(id: number): Observable<Table[]> {
    return this.http.get<Table[]>(this.url + 'tables/' + id);
  }

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.url + 'tables');
  }
}
