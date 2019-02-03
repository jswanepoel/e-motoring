import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { RequestNewSiteVisitComponent } from './request-new-site-visit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuestionModule
  ],
  declarations: [
    RequestNewSiteVisitComponent
  ],
  exports: [
    RequestNewSiteVisitComponent
  ]
})
export class RequestNewSiteVisitModule {
}
