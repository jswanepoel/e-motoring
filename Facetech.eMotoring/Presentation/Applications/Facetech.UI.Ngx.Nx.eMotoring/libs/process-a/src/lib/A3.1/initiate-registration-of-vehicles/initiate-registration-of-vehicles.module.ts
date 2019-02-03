import { NgModule } from '@angular/core';
import { InitiateRegistrationOfVehiclesComponent } from './initiate-registration-of-vehicles.component';
import { QuestionModule, IdentifyImportCertificateModule } from '@facetech/common-ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
imports: [
    CommonModule,
    FormsModule,
  QuestionModule,
  IdentifyImportCertificateModule
  ],
  declarations: [
   InitiateRegistrationOfVehiclesComponent
  ],
  exports: [
    InitiateRegistrationOfVehiclesComponent
  ]
})
export class InitiateRegistrationOfVehiclesModule {
}
