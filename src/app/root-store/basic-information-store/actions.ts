import { createAction, props } from '@ngrx/store';
import { BasicInformation } from 'src/app/models';

export enum BasicInformationActionTypes {
    Load = '[Basic Information] Load',
    LoadSuccess = '[Basic Information] Load Success',
    LoadFailure = '[Basic Information] Load Failure'
}

export const load = createAction(BasicInformationActionTypes.Load);

export const loadSuccess = createAction(
    BasicInformationActionTypes.LoadSuccess,
    props<{ basicInfo: BasicInformation }>());

export const loadFailure = createAction(
    BasicInformationActionTypes.LoadFailure,
    props<{ error: string }>());