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

  @Input() formData: any;
  @Output() formLoad: EventEmitter<BasicInformationFormHandler> = new EventEmitter<BasicInformationFormHandler>();
  
  form: FormGroup;
  formHandler: BasicInformationFormHandler;
  
  constructor() { }

  ngOnInit() {
    const fb: BasicInformationFormBuilder = new BasicInformationFormBuilder();
    this.form = fb.build();

    this.formHandler = new BasicInformationFormHandler(this.form);
    this.formLoad.emit(this.formHandler);
  }
}
