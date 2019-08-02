import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasicInformationFormBuilder } from '../basic-information-form-builder';
import { BasicInformationFormHandler } from '../basic-information-form-handler';


@Component({
  selector: 'app-basic-information-view',
  templateUrl: './basic-information-view.component.html',
  styleUrls: ['./basic-information-view.component.sass']
})
export class BasicInformationViewComponent implements OnInit {

  @Output() formLoad: EventEmitter<BasicInformationFormHandler> = new EventEmitter<BasicInformationFormHandler>();
  
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

  buttonClick(): void {
    console.debug()
  }
}
