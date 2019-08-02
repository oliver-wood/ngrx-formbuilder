
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { BasicInformationShellComponent } from './basic-information-shell/basic-information-shell.component';

const secondaryRoutes = [{ path: 'basic-information',  component: BasicInformationShellComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(secondaryRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BasicInformationRoutingModule { }