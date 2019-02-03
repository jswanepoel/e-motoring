import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/primeng';

import { QuestionModule } from '../questions/question.module';
import { SiteVisitResultsComponent } from './site-visit-results.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    QuestionModule
  ],
  declarations: [
    SiteVisitResultsComponent
  ],
  exports: [
    SiteVisitResultsComponent
  ]
})
export class SiteVisitResultsModule {
}
