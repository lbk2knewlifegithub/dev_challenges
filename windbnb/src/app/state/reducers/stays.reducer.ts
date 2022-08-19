import { createReducer, on } from '@ngrx/store';
import { StaysActions, StaysAPIActions } from '../actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Stay } from '@lbk/shared';

export const staysFeatureKey = 'stays';

export interface State extends EntityState<Stay> {
  query: string;
  isLoading: boolean;
  isTryLoaded: boolean;
  error: string;
}

export const adapter: EntityAdapter<Stay> = createEntityAdapter<Stay>({
  selectId: ({ title }) => title,
  sortComparer: (s1, s2) => s1.rating - s2.rating,
});

export const initialState: State = adapter.getInitialState({
  isLoading: false,
  isTryLoaded: false,
  error: '',
  query: '',
});

export const reducer = createReducer(
  initialState,
  on(StaysActions.loadStays, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(StaysAPIActions.loadStaysSuccess, (state, { stays }) =>
    adapter.addMany(stays, {
      ...state,
      isLoading: false,
      isTryLoaded: true,
    })
  ),
  on(StaysAPIActions.loadStaysError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
    isTryLoaded: true,
  }))
);

export const getError = (state: State) => state.error;
export const getQuery = (state: State) => state.query;
export const getLoading = (state: State) => state.isLoading;
export const getIsTryLoaded = (state: State) => state.isTryLoaded;
