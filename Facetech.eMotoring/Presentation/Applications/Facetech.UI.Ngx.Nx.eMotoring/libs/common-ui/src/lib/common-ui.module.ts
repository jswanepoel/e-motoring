import { NgModule } from '@angular/core';

import { SidePanelMenuModule } from './side-panel-menu/side-panel-menu.module';
import { HeaderModule } from './header/header.module';
import { QuestionModule } from './questions/question.module';
import { ImageMapAreaModule } from './image-map-area/image-map-area.module';
import { FooterModule } from './footer/footer.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { UiBlockModule } from './ui-block/ui-block.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { HomeModule } from './home/home.module';
import { TransactionCommentsModule } from './transaction-comments/transaction-comments.module';
import { TransactionListModule } from './transaction-list/transaction-list.module';
import { DocumentUploadModule } from './document-management/document-upload/document-upload.module';
import { ScheduleCalendarModule } from './schedule-calendar/schedule-calendar.module';
import { TemplateClientMessagesModule } from './template-client-messages/template-client-messages.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { PdfViewModule } from './pdf-viewer/pdf-view.module';
import { BiometricFingerPrintModule, } from './biometric-finger-print/biometric-finger-print.module';
import { DynamicVerifyModule } from './dynamic-verify/dynamic-verify.module';
import { PhotoCaptureModule } from './photo-capture/photo-capture.module';
import { SignatureCaptureModule } from './signature-capture/signature-capture.module';
import { DocumentCaptureModule } from './document-management/document-capture/document-capture.module';
import { RepresentativeTransferModule } from './representative-transfer/representative-transfer.module';
import { TrainingManagmentModule } from './training-managment/training-managment.module';
import { NumberplateOrderModule } from './numberplate-order/numberplate-order.module';
import { TemplateShellModule } from './template-shell/template-shell.module';
import { TemplateEditorModule } from './template-editor/template-editor.module';
import { SignatoryCaptureModule } from './signatory-capture/signatory-capture.module';
import { ReportModule } from './report/report.module';
import { SpinnerModule } from './spinner/spinner.module';
import { CommonUIServicesModule } from '../services/common-ui-services.module';
import { PicklistTableModule } from './picklist-table/picklist-table.module';
import { SiteVisitDetailModule } from './site-visit-detail/site-visit-detail.module';
import { SiteVisitResultsModule } from './site-visit-results/site-visit-results.module';
import { IdentifyImportCertificateModule } from './identify-import-certificate/identify-import-certificate.module';


// https://www.npmjs.com/package/ngx-ckeditor5 (Latest CKEditor component)
// https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/ui/document-editor.html
//https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/angular.html
//import { CkeditorModule } from 'ngx-ckeditor5';
//import { EditorModule } from 'primeng/editor';s

@NgModule({
  imports: [
    SidePanelMenuModule,
    QuestionModule,
    ImageMapAreaModule,
    //HeaderModule,
    FooterModule,
    BreadcrumbsModule,
    UiBlockModule,
    SpinnerModule,
    //PageNotFoundModule,
    //HomeModule,
    TransactionCommentsModule,
    TransactionListModule,
    DocumentUploadModule,
    ScheduleCalendarModule,
    TemplateClientMessagesModule,
    RecommendationModule,
    PdfViewModule,
    BiometricFingerPrintModule,
    DynamicVerifyModule,
    PhotoCaptureModule,
    SignatureCaptureModule,
    DocumentCaptureModule,
    RepresentativeTransferModule,
    TrainingManagmentModule,
    NumberplateOrderModule,
    TemplateShellModule,
    TemplateEditorModule,
    SignatoryCaptureModule,
    ReportModule,
    SiteVisitDetailModule,
    SiteVisitResultsModule,
    PicklistTableModule,
    IdentifyImportCertificateModule,
    CommonUIServicesModule
  ],
  providers: [
  ],
  declarations: [],
  exports: []
})
export class CommonUiModule {
}
