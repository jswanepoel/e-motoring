import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { FinalReviewComponent } from './final-review.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    FinalReviewComponent
  ],
  exports: [
    FinalReviewComponent
  ]
})
export class FinalReviewModule {
}
