import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ButtonModule, DialogModule, PanelModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ViewHistoricalStatmentComponent } from './view-historical-statment.component';
import { ProcessDService } from '../../Services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    TableModule,
    ButtonModule,
    DialogModule,
    PanelModule
  ],
  declarations: [
    ViewHistoricalStatmentComponent
  ],
  exports: [
    ViewHistoricalStatmentComponent
  ],
  providers: [
    ProcessDService
  ]

})
export class ViewHistoricalStatmentModule {
}
