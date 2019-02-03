import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppGlobal } from '../app.global';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private appGlobal: AppGlobal,
              private http: HttpClient) { }

  getImage(uid: string): Observable<any> {
    return this.http.get(this.appGlobal.baseApiUrl + 'guestsqr/' + uid);
  }
}
