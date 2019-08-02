import { FormGroup, FormControl } from '@angular/forms'

export class BasicInformationFormBuilder {

  public build(): FormGroup {
    return new FormGroup({
      brokerName: new FormControl('Broker Name')
    });
  }
}

