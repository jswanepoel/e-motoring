import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QuestionModule } from '@facetech/common-ui';
import { ProcessBService } from '../../services/process-b.service';
import { BuyerLimitedInformationCaptureComponent } from './buyer-limited-information-capture.component';
import { ButtonModule, DialogModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';

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
    BuyerLimitedInformationCaptureComponent
  ],
  exports: [
    BuyerLimitedInformationCaptureComponent
  ],
  providers: [
    ProcessBService
  ]
})
export class BuyerLimitedInformationCaptureModule {
}
