import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { OnBehalfOfOwnerComponent } from './on-behalf-of-owner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    OnBehalfOfOwnerComponent
  ],
  exports: [
    OnBehalfOfOwnerComponent
  ]
})
export class OnBehalfOfOwnerModule {
}
