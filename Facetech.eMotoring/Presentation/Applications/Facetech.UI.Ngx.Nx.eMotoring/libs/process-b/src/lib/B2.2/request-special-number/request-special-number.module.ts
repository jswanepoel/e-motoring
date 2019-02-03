import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';
import { QuestionModule, DynamicVerifyModule, DataTableModule } from '@facetech/common-ui';
import { ProcessBService } from '../../services/process-b.service';
import { RequestSpecialNumberComponent } from './request-special-number.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule,
    DynamicVerifyModule,
    ButtonModule,
    DataTableModule
  ],
  declarations: [
    RequestSpecialNumberComponent
  ],
  exports: [
    RequestSpecialNumberComponent
  ],
  providers: [
    ProcessBService
  ]
})
export class RequestSpecialNumberModule {
}
