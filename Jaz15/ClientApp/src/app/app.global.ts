import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppGlobal {
    readonly baseApiUrl: string = 'http://localhost:42001/api/';

    readonly httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json;'
        })
      };
}
