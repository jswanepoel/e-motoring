import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollPanelModule, TreeTableModule, ButtonModule } from 'primeng/primeng';

import { TransactionCommentsComponent } from './transaction-comments.component';
import { FocusDirective } from './focus.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    BrowserModule,
    ScrollPanelModule,
    TreeTableModule
  ],
  declarations: [
    TransactionCommentsComponent,
    FocusDirective
  ],
  exports: [
    TransactionCommentsComponent,
    FocusDirective
  ]
})
export class TransactionCommentsModule {
}
