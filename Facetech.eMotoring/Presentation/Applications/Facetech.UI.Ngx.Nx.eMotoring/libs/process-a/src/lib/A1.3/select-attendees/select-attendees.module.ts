import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/primeng';

//import { QuestionModule } from '@facetech/common-ui';
import { SelectAttendeesComponent } from './select-attendees.component';
import { PicklistTableModule } from '@facetech/common-ui';
import { SelectAttendeesRoutingModule } from './select-attendees-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    PicklistTableModule,
    SelectAttendeesRoutingModule
    //QuestionModule
  ],
  exports: [
    SelectAttendeesComponent
  ],
  declarations: [
    SelectAttendeesComponent
  ]
})
export class SelectAttendeesModule { }
