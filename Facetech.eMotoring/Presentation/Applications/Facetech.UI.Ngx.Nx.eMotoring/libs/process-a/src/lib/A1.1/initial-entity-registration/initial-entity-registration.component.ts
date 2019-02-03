import { Component, OnInit } from '@angular/core';
import { QuestionService, QuestionsContainer } from '@facetech/common-ui';
import { BreadcrumbsService } from '@facetech/widgets';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'ngx-initial-entity-registration',
  templateUrl: './initial-entity-registration.component.html'
})
export class InitialEntityRegistrationComponent implements OnInit {
  public includeFooter: boolean = true;
  public bodyCenter = true;
  public breadcrumbItems: MenuItem[] = [{}];
  public formDefinition: QuestionsContainer;

  public constructor(
    private crumbs: BreadcrumbsService,
    private questionService: QuestionService) {

    this.breadcrumbItems = [
      { label: 'Initial Entity Registration', routerLink: '/A1.1/initial-entity-registration', icon: 'fa fa-pencil-square' },
      { label: 'Entity Detail', routerLink: '/A1.1/entity-detail', icon: 'fa fa-pencil-square' },
      { label: 'Signatory Detail', routerLink: '/signatory-capture', icon: 'fa fa-pencil-square' },
      { label: 'Select Signatories', routerLink: '/picklist', icon: 'fa fa-pencil-square' },
      { label: 'Signature Card Registration for Representative', routerLink: '/report', icon: 'fa fa-pencil-square' },
      { label: 'Document Upload', routerLink: '/document-upload', icon: 'fa fa-pencil-square' },
      { label: 'Verify Entity Registration', routerLink: '/verify', icon: 'fa fa-pencil-square' },
      { label: 'Appoint Responsible Officer', routerLink: '/picklist', icon: 'fa fa-pencil-square' },
      { label: 'Contact Detail for Site Visit', routerLink: '/A1.1/entity-detail-for-site-visit', icon: 'fa fa-pencil-square' },
      //{ label: 'Site Visit Detail', routerLink: '/A1.1/entity-detail-for-site-visit', icon: 'fa fa-pencil-square' },
      { label: 'Site Visit Result', routerLink: '/report', icon: 'fa fa-pencil-square' },
      { label: 'Document Upload', routerLink: '/document-upload', icon: 'fa fa-pencil-square' },
      { label: 'Verify Transaction', routerLink: '/verify', icon: 'fa fa-pencil-square' },
      { label: 'Corrections Made', routerLink: '/schedule-calendar-testpage', icon: 'fa fa-pencil-square' },
      { label: 'Proof of Corrections', routerLink: '/schedule-calendar-testpage', icon: 'fa fa-pencil-square' },
      { label: 'Garage Plates', routerLink: '/numberplateOrders', icon: 'fa fa-pencil-square' },
      //{ label: 'Register Additional System Users', routerLink: '/A1.1/initial-entity-registration', icon: 'fa fa-pencil-square' },
      //{ label: 'Additional Signatory Cards', routerLink: '/picklist', icon: 'fa fa-pencil-square' },
      { label: 'Generate Payment Instruction', routerLink: '/report', icon: 'fa fa-pencil-square' },
      { label: 'Schedule Appointment for Finalization', routerLink: '/schedule-calendar-testpage', icon: 'fa fa-pencil-square' },
      { label: 'Verify Documents', routerLink: '/verify', icon: 'fa fa-pencil-square' },
      { label: 'Final Review', routerLink: '/verify', icon: 'fa fa-pencil-square' }
    ];

    this.crumbs.nextBreadCrumbs(this.breadcrumbItems);
    this.defineQuestions();  
  }

  public ngOnInit() {
  }

  private defineQuestions(): void {
    this.formDefinition = this.questionService.getDefinition('initialEntityRegistration', 'InitialEntityRegistration', '', true);
  }
}
