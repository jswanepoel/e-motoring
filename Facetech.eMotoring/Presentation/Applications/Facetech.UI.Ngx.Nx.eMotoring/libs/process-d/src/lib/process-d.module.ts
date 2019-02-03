import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QuestionModule } from '@facetech/common-ui';
import { ButtonModule, DropdownModule, PanelModule, RadioButtonModule, SharedModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { WithdrawFloatModule, ShiftManagementModule, OpenShiftModule, CloseShiftModule } from './D0';
import { PaymentAndReceiptModule } from './D1';
import { CaptureRcePaymentModule, GenerateRCEStatementModule } from './D2';
import { CaptureTreasuryPaymentModule } from './D3';
import { ViewHistoricalStatmentModule } from './Shared';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    QuestionModule,
    PanelModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    RadioButtonModule,
    WithdrawFloatModule,
    ShiftManagementModule,
    PaymentAndReceiptModule,
    CaptureRcePaymentModule,
    GenerateRCEStatementModule,
    ViewHistoricalStatmentModule,
    CaptureTreasuryPaymentModule,
    OpenShiftModule,
    CloseShiftModule
  ],
  declarations: [],
  exports: []
})
export class ProcessDModule { }
