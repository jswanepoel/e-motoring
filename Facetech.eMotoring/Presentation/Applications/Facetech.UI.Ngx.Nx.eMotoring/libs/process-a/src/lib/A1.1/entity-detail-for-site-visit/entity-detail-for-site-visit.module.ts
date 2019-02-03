import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/primeng';

import { QuestionModule } from '@facetech/common-ui';

import { EntityDetailForSiteVisitComponent } from './entity-detail-for-site-visit.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    QuestionModule
  ],
  declarations: [
    EntityDetailForSiteVisitComponent
  ],
  exports: [
    EntityDetailForSiteVisitComponent
  ]
})
export class EntityDetailForSiteVisitModule {
}


