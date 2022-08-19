import { Stay } from '../../models';
import { Observable } from 'rxjs';
import { StaysService } from './stays.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StaysFakeService implements StaysService {
  constructor(private readonly _http: HttpClient) {}

  getStays(): Observable<Stay[]> {
    return this._http.get<Stay[]>(`assets/stays.json`);
  }
}
