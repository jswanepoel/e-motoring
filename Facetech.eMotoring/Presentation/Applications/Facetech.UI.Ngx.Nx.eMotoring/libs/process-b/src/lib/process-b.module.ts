import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule, ButtonModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { QuestionModule } from '@facetech/common-ui';
import { UpdateVehicleInformationModule } from './B2.1/update-vehicle-information/update-vehicle-information.module';
import { DisplayVehicleInformationModule } from './B2.1/display-vehicle-information/display-vehicle-information.module';
import { BuyerDocumentManagerModule } from './B2.1/buyer-document-manager/buyer-document-manager.module';
import { BuyerLimitedInformationCaptureModule } from './B2.1/buyer-limited-information-capture/buyer-limited-information-capture.module';
import { BuyerInformationCaptureModule } from './B2.1/buyer-information-capture/buyer-information-capture.module';
import { EntitiesOfInterestModule } from './B2.1/entities-of-interest/entities-of-interest.module';
import { VehicleStatusModule } from './B1/vehicle-status/vehicle-status.module';
import { RequestSpecialNumberModule } from './B2.2/request-special-number/request-special-number.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    NgbCollapseModule,
    TableModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    QuestionModule,
    UpdateVehicleInformationModule,
    DisplayVehicleInformationModule,
    BuyerDocumentManagerModule,
    BuyerLimitedInformationCaptureModule,
    BuyerInformationCaptureModule,
    EntitiesOfInterestModule,
    VehicleStatusModule,
    RequestSpecialNumberModule
  ],
  declarations: [],
  exports: []
})
export class ProcessBModule { }
