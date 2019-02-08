import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from './table';
import { AppGlobal } from '../app.global';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient,
              private appGlobals: AppGlobal) { }

  getTable(id: number): Observable<Table[]> {
    return this.http.get<Table[]>(this.appGlobals.baseApiUrl + 'tables/' + id);
  }

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.appGlobals.baseApiUrl + 'tables');
  }
}
