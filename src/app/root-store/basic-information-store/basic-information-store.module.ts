import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { BasicInformationStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('basic-information', reducer),
    EffectsModule.forFeature([BasicInformationStoreEffects])
  ],
  providers: [
    BasicInformationStoreEffects
  ]
})

export class BasicInformationStoreModule {}