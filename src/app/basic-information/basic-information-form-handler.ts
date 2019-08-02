import { FormGroup } from '@angular/forms';
import { Observable, Subscription, Subject, of } from 'rxjs';

// This needs to be a service I think
export class BasicInformationFormHandler {

  public formChanges$: Observable<any>;
  public statusChanges$: Observable<any>;
  public addressChanges$: Observable<any>;

  constructor (readonly formGroup: FormGroup) {
    this.formChanges$ = formGroup.valueChanges;
    this.statusChanges$ = formGroup.statusChanges;
    this.addressChanges$ = formGroup.controls.address.valueChanges;
  }

  public setFormData(formData) {
    this.formGroup.patchValue(formData);
  }
}
