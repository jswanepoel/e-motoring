import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { ScheduleAppointmentComponent } from './schedule-appointment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    ScheduleAppointmentComponent
  ],
  exports: [
    ScheduleAppointmentComponent
  ]
})
export class ScheduleAppointmentModule {
}
