import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule, DialogModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';

import { QuestionModule, DocumentCaptureModule, DocumentUploadModule, PdfViewModule } from '@facetech/common-ui';
import { ProcessBService } from '../../services/process-b.service';
import { BuyerDocumentManagerComponent } from './buyer-document-manager.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    DocumentCaptureModule,
    DocumentUploadModule,
    PdfViewModule,
    TableModule,
    ButtonModule,
    DialogModule
  ],
  declarations: [
    BuyerDocumentManagerComponent
  ],
  exports: [
   BuyerDocumentManagerComponent
  ],
  providers: [
    ProcessBService
  ]
})
export class BuyerDocumentManagerModule {
}
