import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ButtonModule,
  PanelModule,
  PickListModule,
  SelectButtonModule,
  ToggleButtonModule
} from 'primeng/primeng';

import { QuestionModule } from '@facetech/common-ui';
import { CurrentOwnerInterestComponent } from './current-owner-interest.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    ButtonModule,
    PanelModule,
    PickListModule,
    SelectButtonModule,
    ToggleButtonModule
  ],
  declarations: [
    CurrentOwnerInterestComponent
  ],
  exports: [
    CurrentOwnerInterestComponent
  ]
})
export class CurrentOwnerInterestModule {
}
