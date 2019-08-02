import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasicInformationFormBuilder } from '../basic-information-form-builder';
import { BasicInformationFormHandler } from '../basic-information-form-handler';
import { BasicInformation } from 'src/app/models';


@Component({
  selector: 'app-basic-information-view',
  templateUrl: './basic-information-view.component.html',
  styleUrls: ['./basic-information-view.component.sass']
})
export class BasicInformationViewComponent implements OnInit {

  @Output() formLoad: EventEmitter<BasicInformationFormHandler> = new EventEmitter<BasicInformationFormHandler>();
  @Input() formData: BasicInformation;

  public basicForm: FormGroup;
  formHandler: BasicInformationFormHandler;
  
  constructor() { 
    const fb: BasicInformationFormBuilder = new BasicInformationFormBuilder();
    this.basicForm = fb.build();
  }

  ngOnInit() {
    this.formHandler = new BasicInformationFormHandler(this.basicForm);
    this.formLoad.emit(this.formHandler);

  }

  ngOnChanges(changes: SimpleChanges): void { 
    console.debug('Changes to the form!', changes);
    // Update the data on the form
    this.basicForm.patchValue({
      brokerName: this.formData.brokerName,
      address: this.formData.address
    });
  }

  buttonClick(): void {
    console.debug()
  }
}
