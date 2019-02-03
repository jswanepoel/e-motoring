import { NgModule } from '@angular/core';
import { QuestionModule, IdentifyImportCertificateModule } from '@facetech/common-ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdditionalVehicleInformationComponent } from './additional-vehicle-information.component';

@NgModule({
imports: [
    CommonModule,
    FormsModule,
  QuestionModule,
  IdentifyImportCertificateModule
  ],
  declarations: [
   AdditionalVehicleInformationComponent
  ],
  exports: [
    AdditionalVehicleInformationComponent
  ]
})
export class AdditionalVehicleInformationModule {
}
