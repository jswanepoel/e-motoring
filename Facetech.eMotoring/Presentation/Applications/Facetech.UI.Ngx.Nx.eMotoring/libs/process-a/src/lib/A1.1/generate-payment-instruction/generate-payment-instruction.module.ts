import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { GeneratePaymentInstructionComponent } from './generate-payment-instruction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    GeneratePaymentInstructionComponent
  ],
  exports: [
    GeneratePaymentInstructionComponent
  ]
})
export class GeneratePaymentInstructionModule {
}
