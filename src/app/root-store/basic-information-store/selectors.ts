import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';

export const selectBasicInformationFeatureState = createFeatureSelector<State>('basic-information');

export const selectBasicInformation = createSelector(
    selectBasicInformationFeatureState,
    (state: State) => state.basicInfo
);

export const selectBasicInfoCount = createSelector(
    selectBasicInformationFeatureState,
    (state: State) => state.count
);
