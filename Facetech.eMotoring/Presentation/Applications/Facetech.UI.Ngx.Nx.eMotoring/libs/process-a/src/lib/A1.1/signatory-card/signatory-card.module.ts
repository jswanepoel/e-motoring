import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignatoryCardRoutingModule } from './signatory-card-routing.module';
import { SignatoryCardComponent } from './signatory-card.component';

@NgModule({
  imports: [
    CommonModule,
    SignatoryCardRoutingModule
  ],
  exports: [
    SignatoryCardComponent
  ],
  declarations: [
    SignatoryCardComponent
  ]
})
export class SignatoryCardModule { }
