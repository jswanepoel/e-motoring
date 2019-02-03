import { NgModule } from '@angular/core';
import { QuestionModule, IdentifyImportCertificateModule } from '@facetech/common-ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationOfSingleVehiclesComponent } from './registration-of-single-vehicles.component';

@NgModule({
imports: [
    CommonModule,
    FormsModule,
  QuestionModule,
  IdentifyImportCertificateModule
  ],
  declarations: [
   RegistrationOfSingleVehiclesComponent

  ],
  exports: [
    RegistrationOfSingleVehiclesComponent
  ]
})
export class RegistrationOfSingleVehiclesModule {
}
