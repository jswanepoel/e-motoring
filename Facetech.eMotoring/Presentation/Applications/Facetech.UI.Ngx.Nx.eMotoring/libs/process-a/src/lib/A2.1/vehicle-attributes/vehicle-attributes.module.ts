import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';
import { QuestionModule } from '@facetech/common-ui';

import { VehicleAttributesComponent } from './vehicle-attributes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    QuestionModule
  ],
  declarations: [
    VehicleAttributesComponent
  ],
  exports: [
    VehicleAttributesComponent
  ]
})
export class VehicleAttributesModule {
}
