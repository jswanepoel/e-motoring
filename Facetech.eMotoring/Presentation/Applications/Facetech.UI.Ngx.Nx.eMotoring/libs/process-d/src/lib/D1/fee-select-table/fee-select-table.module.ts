import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ButtonModule, DialogModule, PanelModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ProcessDService } from '../../Services';
import { FeeSelectTableComponent } from './fee-select-table.component';

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
    FeeSelectTableComponent
  ],
  exports: [
    FeeSelectTableComponent
  ],
  providers: [
    ProcessDService
  ]

})
export class FeeSelectTableModule {
}
