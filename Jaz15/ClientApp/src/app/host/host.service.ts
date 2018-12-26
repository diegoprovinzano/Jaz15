import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Host } from './host';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HostService {
  url = 'http://localhost:42000/api/';

  constructor(private http: HttpClient) { }

  getHost(id: number): Observable<Host[]> {
    return this.http.get<Host[]>(this.url + 'hosts/' + id);
  }

  getHosts(): Observable<Host[]> {
    return this.http.get<Host[]>(this.url + 'hosts');
  }
}
