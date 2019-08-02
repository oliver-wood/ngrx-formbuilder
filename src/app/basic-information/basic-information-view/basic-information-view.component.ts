import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-information-view',
  templateUrl: './basic-information-view.component.html',
  styleUrls: ['./basic-information-view.component.sass']
})
export class BasicInformationViewComponent implements OnInit {

  @Input() formData: any;
  
  constructor() { }

  ngOnInit() {
  }

}
