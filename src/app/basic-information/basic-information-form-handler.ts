import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export class BasicInformationFormHandler {

  public formChanges$: Observable<any>;
  public statusChanges$: Observable<any>;
  public addressChanges$: Observable<any>;

  constructor (readonly formGroup: FormGroup) {
    this.formChanges$ = formGroup.valueChanges;
    this.statusChanges$ = formGroup.statusChanges;
    this.addressChanges$ = formGroup.controls.address.valueChanges;
  }
}
