import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { AppointResponsibleOfficerComponent } from './appoint-responsible-officer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    AppointResponsibleOfficerComponent
  ],
  exports: [
    AppointResponsibleOfficerComponent
  ]
})
export class AppointResponsibleOfficerModule {
}
