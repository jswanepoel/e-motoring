import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ButtonModule, DialogModule, DropdownModule, CheckboxModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { CaptureRcePaymentComponent } from './capture-rce.component';
import { ProcessDService } from '../../Services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    TableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    CheckboxModule
  ],
  declarations: [
    CaptureRcePaymentComponent
  ],
  exports: [
    CaptureRcePaymentComponent
  ],
  providers: [
    ProcessDService
  ]

})
export class CaptureRcePaymentModule {
}
