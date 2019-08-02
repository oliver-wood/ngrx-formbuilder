import { FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

// This needs to be a service I think
export class BasicInformationFormHandler {

  public formChanges$: Subscription;

  constructor (readonly formGroup: FormGroup) {
    this.formChanges$ = formGroup.valueChanges.pipe().subscribe();
  }

  

}
