import { NgModule } from '@angular/core';

import { TransferorModule } from './transferor/transferor.module';
import { IdentifyVehicleAndOwnerModule } from './C1.1/identify-vehicle-and-owner/identify-vehicle-and-owner.module';
import { IdentifyNewOwnerModule } from './C1.1/identify-new-owner/identify-new-owner.module';
import { NewOwnerModule } from './C1.1/new-owner/new-owner.module';
import { OnBehalfOfOwnerModule } from './C1.1/on-behalf-of-owner/on-behalf-of-owner.module';
import { DocumentsModule } from './C1.1/documents/documents.module';
import { CurrentOwnerInterestModule } from './C1.1/current-owner-interest/current-owner-interest.module';
import { NewOwnerInterestModule } from './C1.1/new-owner-interest/new-owner-interest.module';
import { VerifyInterestModule } from './C1.1/verify-interest/verify-interest.module';
import { Mta6Module } from './C1.1/mta6/mta6.module';
import { NumberPlateOptionsModule } from './C1.1/number-plate-options/number-plate-options.module';
import { PaymentInstructionModule } from './C1.1/payment-instruction/payment-instruction.module';
import { ScheduleAppointmentModule } from './C1.1/schedule-appointment/schedule-appointment.module';
import { UploadProofOfPaymentModule } from './C1.1/upload-proof-of-payment/upload-proof-of-payment.module';
import { VerifyDocumentsModule } from './C1.1/verify-documents/verify-documents.module';

@NgModule({
  imports: [
    TransferorModule,
    IdentifyVehicleAndOwnerModule,
    IdentifyNewOwnerModule,
    NewOwnerModule,
    OnBehalfOfOwnerModule,
    DocumentsModule,
    CurrentOwnerInterestModule,
    NewOwnerInterestModule,
    VerifyInterestModule,
    Mta6Module,
    NumberPlateOptionsModule,
    PaymentInstructionModule,
    ScheduleAppointmentModule,
    UploadProofOfPaymentModule,
    VerifyDocumentsModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class ProcessCModule {
}
