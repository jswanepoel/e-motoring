import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ButtonModule, DialogModule, PanelModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ProcessDService } from '../../Services';
import { GenerateRCEStatementComponent } from './generate-rce-statement.component';

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
    GenerateRCEStatementComponent
  ],
  exports: [
    GenerateRCEStatementComponent
  ],
  providers: [
    ProcessDService
  ]

})
export class GenerateRCEStatementModule {
}
