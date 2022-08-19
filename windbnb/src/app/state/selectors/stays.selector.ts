import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStays from '../reducers/stays.reducer';

const selectStaysEntitiesState = createFeatureSelector<fromStays.State>(
  fromStays.staysFeatureKey
);

export const {
  selectEntities: selectStaysEntities,
  selectAll: selectAllStays,
} = fromStays.adapter.getSelectors(selectStaysEntitiesState);

export const selectLoading = createSelector(
  selectStaysEntitiesState,
  fromStays.getLoading
);

export const selectIsTryLoaded = createSelector(
  selectStaysEntitiesState,
  fromStays.getIsTryLoaded
);

export const selectError = createSelector(
  selectStaysEntitiesState,
  fromStays.getError
);

export const selectQuery = createSelector(
  selectStaysEntitiesState,
  fromStays.getQuery
);
