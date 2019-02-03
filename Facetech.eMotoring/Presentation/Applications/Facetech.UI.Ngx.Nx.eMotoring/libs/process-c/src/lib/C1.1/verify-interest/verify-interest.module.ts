import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { VerifyInterestComponent } from './verify-interest.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    VerifyInterestComponent
  ],
  exports: [
    VerifyInterestComponent
  ]
})
export class VerifyInterestModule {
}
