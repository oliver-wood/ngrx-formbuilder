import { FormGroup, FormBuilder, Validators } from '@angular/forms'

export class BasicInformationFormBuilder {

  private fb: FormBuilder = new FormBuilder();;

  constructor() {
  }

  public build(): FormGroup {
    return this.fb.group({
      brokerName: [{ value: '', disabled: false }, [Validators.required]],
      address: [{ value: '', disabled: false},[Validators.required]]
    });
  }
}

