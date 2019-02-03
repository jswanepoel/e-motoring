import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './app-layout.component';
import { AppHeaderModule } from '../app-header/app-header.module';
import { AppSideNavigationModule } from '../app-side-navigation/app-side-navigation.module';
import { AppFooterModule } from '../app-footer/app-footer.module';

@NgModule({
  imports: [
    CommonModule,
    AppHeaderModule,
    AppSideNavigationModule,
    AppFooterModule
  ],
  exports: [
    AppLayoutComponent
  ],
  declarations: [
    AppLayoutComponent
  ]
})
export class AppLayoutModule {
}
