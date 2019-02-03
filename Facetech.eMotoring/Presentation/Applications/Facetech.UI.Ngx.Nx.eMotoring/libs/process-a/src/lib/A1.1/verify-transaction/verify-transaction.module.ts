import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { VerifyTransactionComponent } from './verify-transaction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    VerifyTransactionComponent
  ],
  exports: [
    VerifyTransactionComponent
  ]
})
export class VerifyTransactionModule {
}
