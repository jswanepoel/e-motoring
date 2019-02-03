import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PanelModule,
  BlockUIModule
} from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';

import { UiBlockComponent } from './ui-block.component';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    PanelModule,
    BlockUIModule,
    SpinnerModule
  ],
  declarations: [
    UiBlockComponent
  ],
  exports: [
    UiBlockComponent
  ]
})
export class UiBlockModule {
}
