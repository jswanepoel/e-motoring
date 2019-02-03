import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TransferorComponent } from './transferor.component';
import { QuestionModule } from '@facetech/common-ui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    TransferorComponent
  ],
  exports: [
    TransferorComponent
  ]
})
export class TransferorModule {
}
