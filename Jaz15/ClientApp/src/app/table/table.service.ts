import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private data: DataService) { }

  getTables() {
    this.data.getTables();
  }
}
