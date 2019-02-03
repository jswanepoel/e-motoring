import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignatoryDetailsRoutingModule } from './signatory-details-routing.module';
import { SignatoryDetailsComponent } from './signatory-details.component';
import { SignatoryCaptureModule } from '@facetech/common-ui';


@NgModule({
  imports: [
    CommonModule,
    SignatoryDetailsRoutingModule,
    SignatoryCaptureModule
  ],
  exports: [
    SignatoryDetailsComponent
  ],
  declarations: [
    SignatoryDetailsComponent
  ]
})
export class SignatoryDetailsModule {
}
