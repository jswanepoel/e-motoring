import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule, TrainingManagmentModule } from '@facetech/common-ui';
import { ScheduleAppointmentForFinalizationComponent } from './schedule-appointment-for-finalization.component';
import { ScheduleModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    ScheduleModule,
    TrainingManagmentModule

  ],
  declarations: [
    ScheduleAppointmentForFinalizationComponent
  ],
  exports: [
    ScheduleAppointmentForFinalizationComponent
  ]
})
export class ScheduleAppointmentForFinalizationModule {
}
