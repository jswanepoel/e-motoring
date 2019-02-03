import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBaseRoutingModule } from './app-base-routing.module';
import { AppBaseComponent } from './app-base.component';
import { AppContainerModule } from './app-container/app-container.module';

@NgModule({
  imports: [
    CommonModule,
    AppBaseRoutingModule,
    AppContainerModule
  ],
  exports: [
    AppBaseComponent
  ],
  declarations: [
    AppBaseComponent
  ]
})
export class AppBaseModule {
}
