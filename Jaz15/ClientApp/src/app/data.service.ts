import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getGuests() {
    return this.http.get('http://localhost:42000/api/guests');
  }

  getGuest(id: number) {
    return this.http.get('http://localhost:42000/api/guests/' + id);
  }

  getHost() {
    return this.http.get('http://localhost:42000/api/hosts/1');
  }
  
  getTable(id: number) {
    return this.http.get('http://localhost:42000/api/tables/' + id);
  }

  getTables() {
    return this.http.get('http://localhost:42000/api/tables');
  }
}
