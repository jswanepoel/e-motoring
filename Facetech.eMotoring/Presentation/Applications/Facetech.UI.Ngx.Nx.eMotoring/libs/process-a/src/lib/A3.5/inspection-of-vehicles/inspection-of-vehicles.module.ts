import { NgModule } from '@angular/core';
import { QuestionModule, IdentifyImportCertificateModule } from '@facetech/common-ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InspectionOfVehiclesComponent } from './inspection-of-vehicles.component';


@NgModule({
imports: [
    CommonModule,
    FormsModule,
  QuestionModule,
  IdentifyImportCertificateModule
  ],
  declarations: [
 InspectionOfVehiclesComponent
  ],
  exports: [
  InspectionOfVehiclesComponent
  ]
})
export class InspectionOfVehiclesModule {
}
