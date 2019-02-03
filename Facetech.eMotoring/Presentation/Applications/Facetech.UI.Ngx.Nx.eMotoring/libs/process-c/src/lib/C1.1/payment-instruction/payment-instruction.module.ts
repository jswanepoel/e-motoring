import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { PaymentInstructionComponent } from './payment-instruction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    PaymentInstructionComponent
  ],
  exports: [
    PaymentInstructionComponent
  ]
})
export class PaymentInstructionModule {
}
