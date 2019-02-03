import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppContentModule } from '../app-content';
import { AppContainerComponent } from './app-container.component';

@NgModule({
  imports: [
    CommonModule,
    AppContentModule
  ],
  exports: [
    AppContainerComponent
  ],
  declarations: [
    AppContainerComponent
  ]
})
export class AppContainerModule {
}
