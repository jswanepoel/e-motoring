import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';
import { QuestionModule } from '@facetech/common-ui';
import { CaptureImportedVehicleComponent } from './capture-imported-vehicle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    QuestionModule
  ],
  declarations: [
  CaptureImportedVehicleComponent
  ],
  exports: [
  CaptureImportedVehicleComponent
  ]
})
export class CaptureImportedVehicleModule {
}
