import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressSpinnerModule } from 'primeng/primeng';

import { SpinnerComponent } from './spinner.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ProgressSpinnerModule
  ],
  declarations: [
    SpinnerComponent
  ],
  exports: [
   SpinnerComponent
  ]
})
export class SpinnerModule {
}
