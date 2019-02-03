import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ButtonModule, DialogModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { CloseShiftComponent } from './close-shift.component';
import { ProcessDService } from '../../Services';

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
    CloseShiftComponent
  ],
  exports: [
    CloseShiftComponent
  ],
  providers: [
    ProcessDService
  ]

})
export class CloseShiftModule {
}
