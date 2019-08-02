import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as featureActions from './actions';
import { DataService } from '@app/services/data.service';

@Injectable()
export class BasicInformationStoreEffects {

    constructor (
        private dataService: DataService,
        private actions$: Actions
    ) {}

    loadRequestEffect$ = createEffect(() =>
      this.actions$.pipe(
        ofType(featureActions.load),
        concatMap(_ =>
          this.dataService.getBasicInformation()
            .pipe(
              map(basicInfo =>
                featureActions.loadSuccess({basicInfo: basicInfo})
              )
              ,catchError(error => of(featureActions.loadFailure({ error })))
          )
        )
      )
    );
}
