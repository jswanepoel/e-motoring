import { NgModule } from '@angular/core';
import { QuestionModule, ScheduleCalendarModule, TrainingManagmentModule } from '@facetech/common-ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScheduleMobileOfficeComponent } from './schedule-mobile-office.component';

@NgModule({
imports: [
    CommonModule,
    FormsModule,
  QuestionModule,
  ScheduleCalendarModule,
  TrainingManagmentModule
  ],
  declarations: [
   ScheduleMobileOfficeComponent
  ],
  exports: [
    ScheduleMobileOfficeComponent
  ]
})
export class ScheduleMobileOfficeModule {
}
