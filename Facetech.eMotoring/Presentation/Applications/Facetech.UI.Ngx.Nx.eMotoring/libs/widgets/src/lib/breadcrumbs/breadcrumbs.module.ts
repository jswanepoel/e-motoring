import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/primeng';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    BreadcrumbsComponent
  ],
  declarations: [
    BreadcrumbsComponent
  ]
})
export class BreadcrumbsModule {
}
