import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ButtonModule, DialogModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { CaptureTreasuryPaymentComponent } from './capture-treasury-payment.component';
import { ProcessDService } from '../../Services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    TableModule,
    ButtonModule,
    DialogModule
  ],
  declarations: [
    CaptureTreasuryPaymentComponent
  ],
  exports: [
    CaptureTreasuryPaymentComponent
  ],
  providers: [
    ProcessDService
  ]

})
export class CaptureTreasuryPaymentModule {
}
