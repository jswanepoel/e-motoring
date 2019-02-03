import { NgModule } from '@angular/core';
import {
  InitialEntityRegistrationModule,
  EntityDetailModule,
  EntityDetailForSiteVisitModule,
  AppointResponsibleOfficerModule,
  VerifyTransactionModule,
  RequestNewSiteVisitModule,
  GaragePlatesModule,
  RegisterAdditionalSystemUsersModule,
  GeneratePaymentInstructionModule,
  ScheduleAppointmentForFinalizationModule,
  VerifyDocumentsModule,
  FinalReviewModule
} from './A1.1';
import { SelectAttendeesModule } from './A1.3';

import { VehicleAttributesModule } from './A2.1';

import { InitiateRegistrationOfVehiclesModule } from './A3.1';
import { RegistrationOfSingleVehiclesModule } from './A3.2';
import { AdditionalVehicleInformationModule } from './A3.2';
import { ScheduleMobileOfficeModule } from './A3.3';
import { ReleaseBulkVehiclesModule } from './A3.4';
import { InspectionOfVehiclesModule } from './A3.5';
import { InspectionOfAssembledVehicleModule } from './A3.6';
import { InspectionModule } from './A3.7';
import { PrototypeCertificateModule } from './A3.8';

@NgModule({
  imports: [
    InitialEntityRegistrationModule,
    EntityDetailModule,
    EntityDetailForSiteVisitModule,
    AppointResponsibleOfficerModule,
    VerifyTransactionModule,
    RequestNewSiteVisitModule,
    GaragePlatesModule,
    RegisterAdditionalSystemUsersModule,
    GeneratePaymentInstructionModule,
    ScheduleAppointmentForFinalizationModule,
    VerifyDocumentsModule,
    FinalReviewModule,
    InitiateRegistrationOfVehiclesModule,
    RegistrationOfSingleVehiclesModule,
    ScheduleMobileOfficeModule,
    ReleaseBulkVehiclesModule,
    InspectionOfVehiclesModule,
    InspectionOfAssembledVehicleModule,
    InspectionModule,
    PrototypeCertificateModule,
    SelectAttendeesModule,
    AdditionalVehicleInformationModule,
    VehicleAttributesModule
  ],
  declarations: [],
  exports: []
})
export class ProcessAModule {
}
