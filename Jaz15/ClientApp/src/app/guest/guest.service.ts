import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from './guest';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  url = 'http://localhost:42000/api/';

  constructor(private http: HttpClient) { }

  getGuest(id: number): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.url + 'guests/' + id);
  }

  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.url + 'guests');
  }
}
