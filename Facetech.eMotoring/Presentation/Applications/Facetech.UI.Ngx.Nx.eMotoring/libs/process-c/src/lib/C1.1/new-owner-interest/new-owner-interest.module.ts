import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { NewOwnerInterestComponent } from './new-owner-interest.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    NewOwnerInterestComponent
  ],
  exports: [
    NewOwnerInterestComponent
  ]
})
export class NewOwnerInterestModule {
}
