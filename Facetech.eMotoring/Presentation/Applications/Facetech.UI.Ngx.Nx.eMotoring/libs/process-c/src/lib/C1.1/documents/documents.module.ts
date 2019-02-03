import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { DocumentsComponent } from './documents.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    DocumentsComponent
  ],
  exports: [
    DocumentsComponent
  ]
})
export class DocumentsModule {
}
