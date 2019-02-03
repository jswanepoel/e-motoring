import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ButtonModule, DialogModule, PanelModule, DropdownModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { PaymentAndReceiptComponent } from './payment-and-receipt.component';
import { OpenShiftModule, CloseShiftModule } from '../../D0';
import { ProcessDService } from '../../Services';
import { FeeSelectTableModule } from '../fee-select-table';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    TableModule,
    ButtonModule,
    DialogModule,
    PanelModule,
    DropdownModule,    
    OpenShiftModule,
    CloseShiftModule,
    FeeSelectTableModule
  ],
  declarations: [
    PaymentAndReceiptComponent
  ],
  exports: [
    PaymentAndReceiptComponent
  ],
  providers: [
    ProcessDService
  ]

})
export class PaymentAndReceiptModule {
}
