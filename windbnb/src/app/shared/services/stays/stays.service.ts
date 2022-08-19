import { Stay } from '../../models';
import { Observable } from 'rxjs';

export interface StaysService {
  getStays(): Observable<Stay[]>;
}
