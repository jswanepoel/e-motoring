import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ButtonModule, DialogModule, PanelModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ProcessDService } from '../../Services';
import { ShiftManagementComponent } from './shift-management.component';
import { CloseShiftModule } from '../close-shift';
import { OpenShiftModule } from '../open-shift';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    TableModule,
    ButtonModule,
    DialogModule,
    PanelModule,
    OpenShiftModule,
    CloseShiftModule
  ],
  declarations: [
    ShiftManagementComponent
  ],
  exports: [
    ShiftManagementComponent
  ],
  providers: [
    ProcessDService
  ]

})
export class ShiftManagementModule {
}
