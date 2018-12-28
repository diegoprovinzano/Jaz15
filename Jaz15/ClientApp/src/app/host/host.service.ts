import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Host } from './host';
import { AppGlobal } from '../app.global';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private appGlobal: AppGlobal,
              private http: HttpClient) { }

  getHost(id: number): Observable<Host[]> {
    return this.http.get<Host[]>(this.appGlobal.baseApiUrl + 'hosts/' + id);
  }

  getHosts(): Observable<Host[]> {
    return this.http.get<Host[]>(this.appGlobal.baseApiUrl + 'hosts');
  }
}
