import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';

import { ProcessBService } from '../../services/process-b.service';
import { BuyerInformationCaptureComponent } from './buyer-information-capture.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule, DialogModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    QuestionModule,
    TableModule,
    ButtonModule,
    DialogModule
  ],
  declarations: [
    BuyerInformationCaptureComponent
  ],
  exports: [
    BuyerInformationCaptureComponent
  ],
  providers: [
    ProcessBService
  ]
})
export class BuyerInformationCaptureModule {
}
