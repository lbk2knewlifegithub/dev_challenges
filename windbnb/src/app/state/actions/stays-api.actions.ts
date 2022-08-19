import { createAction, props } from '@ngrx/store';
import { Stay } from '../../shared';

export const loadStaysSuccess = createAction(
  '[Stays] Load Stays Success',
  props<{ stays: Stay[] }>()
);

export const loadStaysError = createAction(
  '[Stays] Load Stays Error',
  props<{ error: string }>()
);
