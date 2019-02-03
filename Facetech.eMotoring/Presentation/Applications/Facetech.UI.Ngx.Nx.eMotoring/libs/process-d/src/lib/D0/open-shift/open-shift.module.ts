import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ButtonModule, DialogModule, PanelModule, MessageModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ProcessDService } from '../../Services';
import { OpenShiftComponent } from './open-shift.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    TableModule,
    ButtonModule,
    DialogModule,
    PanelModule,
    MessageModule
  ],
  declarations: [
    OpenShiftComponent
  ],
  exports: [
    OpenShiftComponent
  ],
  providers: [
    ProcessDService
  ]

})
export class OpenShiftModule {
}
