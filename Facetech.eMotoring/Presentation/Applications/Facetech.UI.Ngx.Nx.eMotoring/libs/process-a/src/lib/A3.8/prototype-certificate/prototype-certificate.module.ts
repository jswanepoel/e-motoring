import { NgModule } from '@angular/core';
import { QuestionModule, IdentifyImportCertificateModule} from '@facetech/common-ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrototypeCertificateComponent } from './prototype-certificate.component';


@NgModule({
imports: [
    CommonModule,
    FormsModule,
  QuestionModule,
  IdentifyImportCertificateModule
  ],
  declarations: [
PrototypeCertificateComponent
  ],
  exports: [
PrototypeCertificateComponent
  ]
})
export class PrototypeCertificateModule {
}
