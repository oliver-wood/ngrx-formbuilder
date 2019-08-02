import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInformationShellComponent } from './basic-information-shell/basic-information-shell.component';
import { BasicInformationViewComponent } from './basic-information-view/basic-information-view.component';
import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BasicInformationShellComponent,
    BasicInformationViewComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule,
    ReactiveFormsModule
  ]
})

export class BasicInformationModule { }
