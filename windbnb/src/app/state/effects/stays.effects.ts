import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { StaysActions, StaysAPIActions } from '../actions';
import { Router } from '@angular/router';
import { STAYS_SERVICE } from '@lbk/shared/constants';
import { StaysService } from '@lbk/shared/services/stays/stays.service';

@Injectable({ providedIn: 'root' })
export class StaysEffects {
  loadStays$ = createEffect(() =>
    this._actions$.pipe(
      ofType(StaysActions.loadStays),
      exhaustMap(() => {
        return this._ss.getStays().pipe(
          map((stays) => StaysAPIActions.loadStaysSuccess({ stays })),
          catchError(({ error }) => of(StaysAPIActions.loadStaysError(error)))
        );
      })
    )
  );

  constructor(
    private readonly _actions$: Actions,
    @Inject(STAYS_SERVICE)
    private readonly _ss: StaysService,
    private readonly _router: Router
  ) {}
}
