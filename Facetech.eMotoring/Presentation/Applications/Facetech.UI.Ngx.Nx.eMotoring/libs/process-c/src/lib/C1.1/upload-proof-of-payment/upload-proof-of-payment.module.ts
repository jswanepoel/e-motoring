import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { UploadProofOfPaymentComponent } from './upload-proof-of-payment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    UploadProofOfPaymentComponent
  ],
  exports: [
    UploadProofOfPaymentComponent
  ]
})
export class UploadProofOfPaymentModule {
}
