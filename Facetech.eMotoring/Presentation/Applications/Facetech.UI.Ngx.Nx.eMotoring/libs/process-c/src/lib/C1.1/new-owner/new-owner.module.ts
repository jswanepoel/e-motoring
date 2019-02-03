import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { NewOwnerComponent } from './new-owner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    NewOwnerComponent
  ],
  exports: [
    NewOwnerComponent
  ]
})
export class NewOwnerModule {
}
