import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ProcessBService } from '../../services/process-b.service';
import { VehicleStatusComponent } from './vehicle-status.component';
import { TableModule } from 'primeng/table';
import { ButtonModule, DialogModule } from 'primeng/primeng';

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
    VehicleStatusComponent
  ],
  exports: [
    VehicleStatusComponent
  ],
  providers: [
    ProcessBService
  ]

})
export class VehicleStatusModule {
}
