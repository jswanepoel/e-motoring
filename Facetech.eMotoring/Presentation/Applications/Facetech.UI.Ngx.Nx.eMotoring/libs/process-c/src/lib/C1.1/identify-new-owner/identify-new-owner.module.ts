import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { IdentifyNewOwnerComponent } from './identify-new-owner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    IdentifyNewOwnerComponent
  ],
  exports: [
    IdentifyNewOwnerComponent
  ]
})
export class IdentifyNewOwnerModule {
}
