import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header';
import { BreadcrumbsModule } from './breadcrumbs';
import { FooterModule } from './footer';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    BreadcrumbsModule
  ]
})
export class WidgetsModule {
}
