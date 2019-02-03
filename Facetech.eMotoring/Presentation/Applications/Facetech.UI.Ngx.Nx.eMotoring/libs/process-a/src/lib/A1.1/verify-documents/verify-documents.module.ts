import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule, DynamicVerifyModule, PdfViewModule } from '@facetech/common-ui';
import { VerifyDocumentsComponent } from './verify-documents.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    DynamicVerifyModule,
    PdfViewModule
  ],
  declarations: [
    VerifyDocumentsComponent
  ],
  exports: [
    VerifyDocumentsComponent
  ]
})
export class VerifyDocumentsModule {
}
