import { NgModule } from '@angular/core';
import { QuestionModule, IdentifyImportCertificateModule } from '@facetech/common-ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReleaseBulkVehiclesComponent } from './release-bulk-vehicles.component';


@NgModule({
imports: [
    CommonModule,
    FormsModule,
  QuestionModule,
  IdentifyImportCertificateModule
  ],
  declarations: [
  ReleaseBulkVehiclesComponent
  ],
  exports: [
   ReleaseBulkVehiclesComponent
  ]
})
export class ReleaseBulkVehiclesModule {
}
