import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ProcessBService } from '../../services/process-b.service';
import { DisplayVehicleInformationComponent } from './display-vehicle-information.component';
import { ButtonModule, DialogModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    TableModule,
    ButtonModule,
    DialogModule
  ],
  declarations: [
    DisplayVehicleInformationComponent
  ],
  exports: [
   DisplayVehicleInformationComponent
  ],
  providers: [
    ProcessBService
  ]
})
export class DisplayVehicleInformationModule {
}
