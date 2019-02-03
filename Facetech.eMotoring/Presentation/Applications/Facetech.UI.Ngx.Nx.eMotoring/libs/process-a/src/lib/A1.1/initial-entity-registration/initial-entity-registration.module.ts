import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/primeng';

import { InitialEntityRegistrationRoutingModule } from './initial-entity-registration-routing.module';
import { InitialEntityRegistrationComponent } from './initial-entity-registration.component';
import { ForeignerVisaDetailsComponent } from '../../components/foreigner-visa-details/foreigner-visa-details.component';
import { ForeignerPermanentAddressDetailsComponent } from '../../components/foreigner-permanent-address-details/foreigner-permanent-address-details.component';
import { QuestionModule } from '@facetech/common-ui';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    QuestionModule,
    InitialEntityRegistrationRoutingModule
  ],
  exports: [
    InitialEntityRegistrationComponent,
    ForeignerVisaDetailsComponent,
    ForeignerPermanentAddressDetailsComponent
  ],
  declarations: [
    InitialEntityRegistrationComponent,
    ForeignerVisaDetailsComponent,
    ForeignerPermanentAddressDetailsComponent
  ],

})
export class InitialEntityRegistrationModule { }
