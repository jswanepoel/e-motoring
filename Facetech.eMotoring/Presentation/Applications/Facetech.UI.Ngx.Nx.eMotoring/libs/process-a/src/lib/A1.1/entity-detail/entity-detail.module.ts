import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/primeng';
import { QuestionModule } from '@facetech/common-ui';

import { EntityDetailComponent } from './entity-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    QuestionModule
  ],
  exports: [
    EntityDetailComponent
  ],
  declarations: [
    EntityDetailComponent
  ]
})
export class EntityDetailModule { }
