import { Component, OnInit } from '@angular/core';
import { BasicInformationViewComponent} from '../basic-information-view/basic-information-view.component';

@Component({
  selector: 'app-basic-information-shell',
  templateUrl: './basic-information-shell.component.html',
  styleUrls: ['./basic-information-shell.component.sass']
})
export class BasicInformationShellComponent implements OnInit {

  viewmodeldata = {
    brokerName: "Oliver the broker"
  };

  constructor() { }

  ngOnInit() {
  }

}
