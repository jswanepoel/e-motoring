import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { GaragePlatesComponent } from './garage-plates.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    GaragePlatesComponent
  ],
  exports: [
    GaragePlatesComponent
  ]
})
export class GaragePlatesModule {
}
