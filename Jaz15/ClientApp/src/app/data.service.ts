import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick() {
    return console.log('clicked service');
  }

  getGuests() {
    return this.http.get('http://localhost:42000/api/guests');
  }

  getHost() {
    return this.http.get('http://localhost:42000/api/hosts/1');
  }
  
  getTable() {
    return this.http.get('http://localhost:42000/api/guests');
  }
  

}
