import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IdentifyImportCertificateComponent } from './identify-import-certificate.component';
import { QuestionModule } from '../questions';


@NgModule({
imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
   IdentifyImportCertificateComponent
  ],
  exports: [
    IdentifyImportCertificateComponent
  ]
})

export class IdentifyImportCertificateModule {
}
