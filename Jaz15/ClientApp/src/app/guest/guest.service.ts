import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from './guest';
import { AppGlobal } from '../app.global';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private appGlobal: AppGlobal,
              private http: HttpClient) { }

  getGuestUID(uid: string): Observable<Guest> {
    return this.http.get<Guest>(this.appGlobal.baseApiUrl + 'guestsuid/' + uid);
  }

  getGuest(id: number): Observable<Guest> {
    return this.http.get<Guest>(this.appGlobal.baseApiUrl + 'guests/' + id);
  }

  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.appGlobal.baseApiUrl + 'guests');
  }

  putGuest(guest: Guest): Observable<Guest> {
    return this.http.put<Guest>(this.appGlobal.baseApiUrl + 'guests/' + guest.UID, guest);
  }

  postGuest(guest: Guest): Observable<Guest> {
    return this.http.put<Guest>(this.appGlobal.baseApiUrl + 'guests', guest);
  }
}
