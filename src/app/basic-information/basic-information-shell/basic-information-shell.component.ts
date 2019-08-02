import { Component, OnInit } from '@angular/core';
import { BasicInformationViewComponent} from '../basic-information-view/basic-information-view.component';
import { BasicInformationFormHandler } from '../basic-information-form-handler';
import { Subject, timer } from 'rxjs';
import { takeUntil, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-basic-information-shell',
  templateUrl: './basic-information-shell.component.html',
  styleUrls: ['./basic-information-shell.component.sass']
})
export class BasicInformationShellComponent implements OnInit {

  private handler: BasicInformationFormHandler;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  initialState = {
    brokerName: "Oliver the broker",
    address: "99 Old Tom's Brewery"
  };

  constructor() { }

  ngOnInit() { 

  }

  initHandler(handler: BasicInformationFormHandler) {
    this.handler = handler;
    console.debug("The view component provided a reference to the form handler");

    // Set up value change subscriptions
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
    
    // Populate the form from initial state.
    this.handler.setFormData(this.initialState);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
