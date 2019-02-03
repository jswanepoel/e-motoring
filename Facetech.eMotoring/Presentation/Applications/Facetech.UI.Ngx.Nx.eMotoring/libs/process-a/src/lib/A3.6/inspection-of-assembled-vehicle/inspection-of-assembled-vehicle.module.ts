import { NgModule } from '@angular/core';
import { QuestionModule, IdentifyImportCertificateModule } from '@facetech/common-ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InspectionOfAssembledVehicleComponent } from './inspection-of-assembled-vehicle.component';


@NgModule({
imports: [
    CommonModule,
    FormsModule,
  QuestionModule,
  IdentifyImportCertificateModule
  ],
  declarations: [
InspectionOfAssembledVehicleComponent
  ],
  exports: [
  InspectionOfAssembledVehicleComponent
  ]
})
export class InspectionOfAssembledVehicleModule {
}
