import { Action, createReducer, on } from '@ngrx/store';
import * as featureActions from './actions';
import { initialState, State } from './state';
import { BasicInformation } from 'src/app/models';

const featureReducer = createReducer(
  getInitialState(),
  on(featureActions.loadSuccess, (state, { basicInfo }) => (
    {
        ...state,
        basicInfo: basicInfo,
        count: state.count+1
    }))
);

function getInitialState() {
  console.debug(initialState);
  return initialState;
}

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}