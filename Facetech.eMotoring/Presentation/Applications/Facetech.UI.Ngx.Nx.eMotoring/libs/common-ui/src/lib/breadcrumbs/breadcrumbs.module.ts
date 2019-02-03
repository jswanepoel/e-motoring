import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/primeng';

import { LoginService } from '../security/login.service';
import { QuestionModule } from '../questions/question.module';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { BreadcrumbsService } from './breadcrumbs.service';
import { CarouselModule } from 'primeng/carousel';
@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    QuestionModule,
    CarouselModule,
    BreadcrumbModule
  ],
  declarations: [
     BreadcrumbsComponent
  ],
  exports: [
     BreadcrumbsComponent
  ],
  providers: [
    BreadcrumbsService,
    LoginService
  ]
})
export class BreadcrumbsModule {
}
