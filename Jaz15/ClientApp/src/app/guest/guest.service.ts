import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from './guest';
import { AppGlobal } from '../app.global';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private appGlobal: AppGlobal,
              private http: HttpClient) { }

  getGuest(id: number): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.appGlobal.baseApiUrl + 'guests/' + id);
  }

  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.appGlobal.baseApiUrl + 'guests');
  }
}
