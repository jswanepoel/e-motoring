import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';

import { SiteVisitDetailComponent } from './site-visit-detail.component';
import { QuestionModule } from '../questions/question.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    QuestionModule
  ],
  declarations: [
    SiteVisitDetailComponent
  ],
  exports: [
    SiteVisitDetailComponent
  ]
})
export class SiteVisitDetailModule {
}
