import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionModule } from '@facetech/common-ui';
import { ButtonModule, DialogModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { ProcessDService } from '../../Services';
import { WithdrawFloatComponent } from './withdraw-float.component';

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
    WithdrawFloatComponent
  ],
  exports: [
    WithdrawFloatComponent
  ],
  providers: [
    ProcessDService
  ]

})
export class WithdrawFloatModule {
}
