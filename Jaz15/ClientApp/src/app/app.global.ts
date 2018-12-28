import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobal {
    readonly baseApiUrl: string = 'http://localhost:42001/api/';
}
