import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StaysAPIActions, StaysActions } from '../actions';
import * as fromStays from '@lbk/state/selectors/stays.selector';
import { Stay } from '@lbk/shared';

@Injectable({ providedIn: 'root' })
export class StaysFacade {
  stays$: Observable<Stay[]> = this._store.select(fromStays.selectAllStays);
  isLoading$: Observable<boolean> = this._store.select(fromStays.selectLoading);
  isTryLoaded: Observable<boolean> = this._store.select(
    fromStays.selectIsTryLoaded
  );
  error$: Observable<string> = this._store.select(fromStays.selectError);

  constructor(private readonly _store: Store) {}

  loadStays() {
    this._store.dispatch(StaysActions.loadStays());
  }
}
