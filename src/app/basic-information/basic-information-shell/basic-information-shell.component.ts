import { Component, OnInit } from '@angular/core';
import { BasicInformationFormHandler } from '../basic-information-form-handler';
import { Subject, timer, Observable } from 'rxjs';
import { takeUntil, debounce } from 'rxjs/operators';

import { BasicInformationStoreActions, BasicInformationStoreSelectors, BasicInformationStoreState } from '../../root-store';
import { Store, select } from '@ngrx/store';
import { BasicInformation } from 'src/app/models';

@Component({
  selector: 'app-basic-information-shell',
  templateUrl: './basic-information-shell.component.html',
  styleUrls: ['./basic-information-shell.component.sass']
})
export class BasicInformationShellComponent implements OnInit {

  private handler: BasicInformationFormHandler;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  basicInformation$: Observable<BasicInformation>;

  constructor(private store: Store<BasicInformationStoreState.State>) { }

  ngOnInit() { 
    // dispatch the load action
    this.store.dispatch(BasicInformationStoreActions.load());

    this.basicInformation$ = this.store.pipe(select(BasicInformationStoreSelectors.selectBasicInformation));
  }

  initHandler(handler: BasicInformationFormHandler) {
    this.handler = handler;
    console.debug("The view component provided a reference to the form handler");

    // Form hanlding subscriptions
    this.handler.formChanges$
      .pipe(
        debounce(() => timer(300)),
        takeUntil(this.destroy$)
      )
      .subscribe(data => console.debug('Data Change', data));
    
    this.handler.addressChanges$
      .pipe(
        debounce(() => timer(300)),
        takeUntil(this.destroy$)
      )
      .subscribe(data => console.debug('Address Change', data));
    
    this.handler.statusChanges$
      .pipe(
        debounce(() => timer(300)),
        takeUntil(this.destroy$)
      )
      .subscribe(data => console.debug('Status:', data));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
