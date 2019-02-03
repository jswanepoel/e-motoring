import { NgModule } from '@angular/core';
import { QuestionModule, IdentifyImportCertificateModule } from '@facetech/common-ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InspectionComponent } from './inspection.component';

@NgModule({
imports: [
    CommonModule,
    FormsModule,
  QuestionModule,
  IdentifyImportCertificateModule
  ],
  declarations: [
InspectionComponent
  ],
  exports: [
  InspectionComponent
  ]
})
export class InspectionModule {
}
