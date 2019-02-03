import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {
  TransferorComponent,
  IdentifyVehicleAndOwnerComponent,
  IdentifyNewOwnerComponent,
  NewOwnerComponent,
  OnBehalfOfOwnerComponent,
  DocumentsComponent,
  CurrentOwnerInterestComponent,
  VerifyInterestComponent,
  NewOwnerInterestComponent,
  MTA6Component,
  NumberPlateOptionsComponent,
  PaymentInstructionComponent,
  ScheduleAppointmentComponent,
  UploadProofOfPaymentComponent,
  // VerifyDocumentsComponent
} from '@facetech/process-c';

import {
  DocumentUploadComponent,
  ScheduleCalendarTestpageComponent,
  TransactionCommentsComponent,
  TemplateEditorComponent,
  TransactionListComponent,
  UiBlockComponent,
  RecommendationComponent,
  PdfViewComponent,
  BiometricFingerPrintComponent,
  PhotoCaptureComponent,
  DocumentCaptureComponent,
  SignatureCaptureComponent,
  RepresentativeTransferComponent,
  TrainingManagmentComponent,
  NumberplateOrderComponent,
  TemplateShellComponent,
  SignatoryCaptureComponent,
  SiteVisitDetailComponent,
  SiteVisitResultsComponent,
  ReportComponent,
  VerifyTestComponent,
  PicklistTableComponent,
  TestTestComponent,
  TestPicklistTableComponent,
  
} from '@facetech/common-ui'


import { BreadcrumbsComponent } from '@facetech/widgets';


import {
  BuyerDocumentManagerComponent,
  BuyerLimitedInformationCaptureComponent,
  BuyerInformationCaptureComponent,
  DisplayVehicleInformationComponent,
  VehicleStatusComponent,
  UpdateVehicleInformationComponent,
  EntitiesOfInterestComponent,
  RequestSpecialNumberComponent
} from '@facetech/process-b';

import {
  CaptureRcePaymentComponent,
  CaptureTreasuryPaymentComponent,
  CloseShiftComponent,
  OpenShiftComponent,
  WithdrawFloatComponent,
  ShiftManagementComponent,
  PaymentAndReceiptComponent,
  FeeSelectTableComponent,
  ViewHistoricalStatmentComponent
} from '@facetech/process-d';

import {
  CreateCustomerQueryComponent
} from '@facetech/process-e';

import {
  EntityDetailForSiteVisitComponent,
  AppointResponsibleOfficerComponent,
  VerifyTransactionComponent,
  RequestNewSiteVisitComponent,
  GaragePlatesComponent,
  RegisterAdditionalSystemUsersComponent,
  GeneratePaymentInstructionComponent,
  ScheduleAppointmentForFinalizationComponent,
  FinalReviewComponent,
  VerifyDocumentsComponent,
  InitialEntityRegistrationComponent,
  InspectionOfVehiclesComponent,
  RegistrationOfSingleVehiclesComponent,
  ReleaseBulkVehiclesComponent,
  ScheduleMobileOfficeComponent,
  InspectionOfAssembledVehicleComponent,
  InspectionComponent,
  PrototypeCertificateComponent,
  InitiateRegistrationOfVehiclesComponent,
  EntityDetailComponent,
  SelectAttendeesComponent,  VehicleAttributesComponent,
  AdditionalVehicleInformationComponent
} from '@facetech/process-a';
import { PickListModule } from 'primeng/primeng';


const routes: Routes = [
  //{
  //  path: '',
  //  redirectTo: '/home',
  //  pathMatch: 'full'
  //},
  {
    path: 'picklist',
    component: TestPicklistTableComponent
  },
  {
    path: 'picklist2',
    component: PicklistTableComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'block',
    component: UiBlockComponent
  },
  {
    path: 'table',
    component: TestTestComponent
  },
  {
    path: 'blockUI',
    component: UiBlockComponent
  },
  {
    path: 'transaction-comments',
    component: TransactionCommentsComponent
  },
  {
    path: 'template-shell',
    component: TemplateShellComponent
  },
  {
    path: 'document-upload',
    component: DocumentUploadComponent
  },
  {
    path: 'B1/vehicle-status',
    component: VehicleStatusComponent
  },
  {
    path: 'B2.1/update-vehicle-info',
    component: UpdateVehicleInformationComponent
  },
  {
    path: 'B2.1/display-vehicle-info',
    component: DisplayVehicleInformationComponent
  },
  {
    path: 'B2.1/buyer-limited-information-capture',
    component: BuyerLimitedInformationCaptureComponent
  },
  {
    path: 'B2.1/buyer-information-capture',
    component: BuyerInformationCaptureComponent
  },
  {
    path: 'B2.1/entities-of-interest',
    component: EntitiesOfInterestComponent
  },
  {
    path: 'B2.2/request-number',
    component: RequestSpecialNumberComponent
  },
  {
    path: 'template-editor',
    component: TemplateEditorComponent
  },
  {
    path: 'schedule-calendar-testpage',
    component: ScheduleCalendarTestpageComponent
  },
  {
    path: 'breadcrumbs',
    component: BreadcrumbsComponent
  },
  {
    path: 'B2.1/buyer-document-manager',
    component: BuyerDocumentManagerComponent
  },
  //{
  //  path: 'register',
  //  component: RegistrationComponent
  //},
  //{
  //  path: 'register',
  //  component: RegistrationComponent
  //},
  {
    path: 'transaction-list',
    component: TransactionListComponent
  },
  {
    path: 'recommendation',
    component: RecommendationComponent
  },
  {
    path: 'pdfviewer',
    component: PdfViewComponent
  },
  {
    path: 'signatory-capture',
    component: SignatoryCaptureComponent
  },
  {
    path: 'repTransfer',
    component: RepresentativeTransferComponent
  },
  {
    path: 'trainingOverview',
    component: TrainingManagmentComponent
  },
  {
    path: 'numberplateOrders',
    component: NumberplateOrderComponent
  },
  //{
  //  path: 'D0/shift-management',
  //  component: ShiftManagementComponent
  //}, {
  //  path: 'D0/float-management',
  //  component: FloatManagementComponent
  //},
  //{
  //  path: 'PayFees',
  //  component: SelectFeeComponent
  //},
  //{
  //  path: 'PayFees',
  //  component: PaymentAndReceiptComponent
  //},
  //{
  //  path: 'D1/reverse-transaction',
  //  component: SelectEntityComponent
  //},
  //{
  //  path: 'viewTransactions',
  //  component: ViewTransactionsComponent
  //},
  //{
  //  path: 'D2/viewHistoricalStatements',
  //  component: MakePaymentComponent
  //},
  {
    path: 'queries/create-customer-query',
    component: CreateCustomerQueryComponent
  },
  {
    path: 'photo-capture',
    component: PhotoCaptureComponent
  },
  {
    path: 'fingerprints',
    component: BiometricFingerPrintComponent
  },
  {
    path: 'documents',
    component: DocumentCaptureComponent
  },
  {
    path: 'signature',
    component: SignatureCaptureComponent
  },
  {
    path: 'photos/:id',
    component: PhotoCaptureComponent
  },
  {
    path: 'fingerprints/:id',
    component: BiometricFingerPrintComponent
  },
  {
    path: 'signatures/:id',
    component: SignatureCaptureComponent
  },
  //{
  //  path: 'person-create',
  //  component: PersonCreateComponent
  //},
  //{
  //  path: 'person-list',
  //  component: PersonListComponent
  //},
  {
    path: 'transferor',
    component: TransferorComponent
  },
  {
    path: 'verify',
    component: VerifyTestComponent
  },
  {
    path: 'A1.1/entity-detail-for-site-visit',
    component: EntityDetailForSiteVisitComponent
  },
  {
    path: 'A1.1/entity-detail',
    component: EntityDetailComponent
  },
  {
    path: 'A1.1/appoint-responsible-officer',
    component: AppointResponsibleOfficerComponent
  },
  {
    path: 'site-visit-detail',
    component: SiteVisitDetailComponent
  },
  {
    path: 'site-visit-results',
    component: SiteVisitResultsComponent
  },
  {
    path: 'A1.1/verify-transaction',
    component: VerifyTransactionComponent
  },
  {
    path: 'A1.1/request-new-site-visit',
    component: RequestNewSiteVisitComponent
  },
  {
    path: 'A1.1/garage-plates',
    component: GaragePlatesComponent
  },
  {
    path: 'A1.1/initial-entity-registration',
    component: InitialEntityRegistrationComponent
  },
  {
    path: 'A1.1/register-additional-system-users',
    component: RegisterAdditionalSystemUsersComponent
  },
  {
    path: 'A1.1/generate-payment-instruction',
    component: GeneratePaymentInstructionComponent
  },
  {
    path: 'A1.1/schedule-appointment-for-finalization',
    component: ScheduleAppointmentForFinalizationComponent
  },
  {
    path: 'A1.1/verify-documents',
    component: VerifyDocumentsComponent
  },
  {
    path: 'A1.1/final-review',
    component: FinalReviewComponent
  },
  {
    path: 'A1.3/select-attendees',
    component: SelectAttendeesComponent
  },
  {
    path: 'A1.3/picklist-table/test-picklist-table',
    component: TestPicklistTableComponent
  },
  {
    path: 'A2.1/vehicle-attributes',
    component: VehicleAttributesComponent
  },

  //{ Replaced by 
  //  path: 'A1.1/signatory-details',
  //  component: SignatoryDetailsComponent
  //},
  {
    path: 'A3.1/initiate-registration-of-vehicles',
    component: InitiateRegistrationOfVehiclesComponent
  },
  {
    path: 'A3.2/registration-of-single-vehicles',
    component: RegistrationOfSingleVehiclesComponent
  },
  {
    path: 'A3.2/additional-vehicle-information',
    component: AdditionalVehicleInformationComponent
  },
  {
    path: 'A3.3/schedule-mobile-office-component',
    component: ScheduleMobileOfficeComponent
  },
  {
    path: 'A3.4/release-bulk-vehicles',
    component: ReleaseBulkVehiclesComponent
  },
  {
    path: 'A3.5/inspection-of-vehicles',
    component: InspectionOfVehiclesComponent
  },
  {
    path: 'A3.6/inspection-of-assembled-vehicle',
    component: InspectionOfAssembledVehicleComponent
  }, {
    path: 'A3.7/inspection',
    component: InspectionComponent
  }, {
    path: 'A3.8/prototype-certificate',
    component: PrototypeCertificateComponent
  },
  {
    path: 'C1.1/identify-vehicle-and-owner',
    component: IdentifyVehicleAndOwnerComponent
  },
  {
    path: 'C1.1/identify-new-owner',
    component: IdentifyNewOwnerComponent
  },
  {
    path: 'C1.1/new-owner',
    component: NewOwnerComponent
  },
  {
    path: 'C1.1/on-behalf-of-owner',
    component: OnBehalfOfOwnerComponent
  },
  {
    path: 'C1.1/documents',
    component: DocumentsComponent
  },
  {
    path: 'C1.1/current-owner-interest',
    component: CurrentOwnerInterestComponent
  },
  {
    path: 'C1.1/new-owner-interest',
    component: NewOwnerInterestComponent
  },
  {
    path: 'C1.1/verify-interest',
    component: VerifyInterestComponent
  },
  {
    path: 'C1.1/mta6',
    component: MTA6Component
  },
  {
    path: 'C1.1/number-plate-options',
    component: NumberPlateOptionsComponent
  },
  {
    path: 'C1.1/payment-instruction',
    component: PaymentInstructionComponent
  },
  {
    path: 'C1.1/schedule-appointment',
    component: ScheduleAppointmentComponent
  },
  {
    path: 'C1.1/upload-proof-of-payment',
    component: UploadProofOfPaymentComponent
  },
  //{
  //  path: 'C1.1/verify-documents',
  //  component: VerifyDocumentsComponent
  //},
  {
    path: 'documents/:id',
    component: DocumentCaptureComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppContentRoutingModule {
}


export const AppRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
