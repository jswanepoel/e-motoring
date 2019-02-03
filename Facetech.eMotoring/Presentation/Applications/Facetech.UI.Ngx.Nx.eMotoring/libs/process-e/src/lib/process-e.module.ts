import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { DialogModule, ButtonModule, DropdownModule, PanelModule, CardModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { CreateCustomerQueryComponent } from './queries/create-customer-query/create-customer-query.component';
import { RespondCustomerQueryComponent } from './queries/respond-customer-query/respond-customer-query.component';
import { SubmitComplaintComponent } from './complaints/submit-complaint/submit-complaint.component';
import { ComplaintResponseComponent } from './complaints/complaint-response/complaint-response.component';
import { OfficerCapturesCustomerQueryComponent } from './queries/officer-captures-customer-query/officer-captures-customer-query.component';
import { CreateFaqArticleComponent } from './knowledgebase/create-faq-article/create-faq-article.component';
import { TrendAnalysisComponent } from './feedback/trend-analysis/trend-analysis.component';
import { ViewQueryStatusComponent } from './queries/view-query-status/view-query-status.component';
import { ViewQueryHistoryComponent } from './queries/view-query-history/view-query-history.component';
import { CreateInquiryComponent } from './inquiries/create-inquiry/create-inquiry.component';
import { CompleteInquiryComponent } from './inquiries/complete-inquiry/complete-inquiry.component';
import { SearchPublicDomainComponent } from './queries/search-public-domain/search-public-domain.component';
import { ViewComplaintDetailComponent } from './complaints/view-complaint-detail/view-complaint-detail.component';
import { ViewQueryDetailComponent } from './queries/view-query-detail/view-query-detail.component';
import { ViewFaqDetailComponent } from './knowledgebase/view-faq-detail/view-faq-detail.component';
import { ViewFeedbackComponent } from './feedback/view-feedback/view-feedback.component';
import { AssignInformationGatherOfficersComponent } from './inquiries/assign-information-gather-officers/assign-information-gather-officers.component';


@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    TableModule,
    ButtonModule,
    BrowserModule,
    HttpClientModule, // import HttpClientModule after BrowserModule.
    ToastModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    PanelModule,
    CardModule
  ],
  declarations: [
    CreateCustomerQueryComponent,
    RespondCustomerQueryComponent,
    SubmitComplaintComponent,
    ComplaintResponseComponent,
    OfficerCapturesCustomerQueryComponent,
    CreateFaqArticleComponent,
    TrendAnalysisComponent,
    ViewQueryStatusComponent,
    ViewQueryHistoryComponent,
    CreateInquiryComponent,
    CompleteInquiryComponent,
    SearchPublicDomainComponent,
    ViewComplaintDetailComponent,
    ViewQueryDetailComponent,
    ViewFaqDetailComponent,
    ViewFeedbackComponent,
    AssignInformationGatherOfficersComponent],
  exports: [
    CreateCustomerQueryComponent,
    RespondCustomerQueryComponent,
    SubmitComplaintComponent,
    ComplaintResponseComponent,
    OfficerCapturesCustomerQueryComponent,
    CreateFaqArticleComponent,
    TrendAnalysisComponent,
    ViewQueryStatusComponent,
    ViewQueryHistoryComponent,
    CreateInquiryComponent,
    CompleteInquiryComponent,
    SearchPublicDomainComponent,
    ViewComplaintDetailComponent,
    ViewQueryDetailComponent,
    ViewFaqDetailComponent,
    ViewFeedbackComponent,
    AssignInformationGatherOfficersComponent]
})
export class ProcessEModule {}
