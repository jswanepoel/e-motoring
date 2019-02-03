import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';

import { QuestionModule } from '@facetech/common-ui';
import { IdentifyVehicleAndOwnerComponent } from './identify-vehicle-and-owner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    QuestionModule
  ],
  declarations: [
    IdentifyVehicleAndOwnerComponent
  ],
  exports: [
    IdentifyVehicleAndOwnerComponent
  ]
})
export class IdentifyVehicleAndOwnerModule {
}
