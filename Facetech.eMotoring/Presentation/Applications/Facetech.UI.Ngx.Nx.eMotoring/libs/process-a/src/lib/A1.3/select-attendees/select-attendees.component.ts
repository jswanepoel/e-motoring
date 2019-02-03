import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@facetech/common-ui';
//import { QuestionService, QuestionsContainer } from '@facetech/common-ui';

@Component({
  selector: 'ngx-select-attendees',
  templateUrl: './select-attendees.component.html',
  styleUrls: ['./select-attendees.component.css'],
  providers: [
    BreadcrumbsService
  ]
})
export class SelectAttendeesComponent implements OnInit {

  public includeFooter: boolean = true;
  public bodyCenter = true;
  public breadcrumbItems: any;
  //public formDefinition: QuestionsContainer;

  constructor(
    private breadcrumbsService: BreadcrumbsService) { //private questionService: QuestionService

    this.breadcrumbItems = [
      //{ label: 'Initial Entity Registration', routerLink: '/A1.1/initial-entity-registration', icon: 'fa fa-pencil-square' }
      { label: 'Select Attendees', routerLink: '/picklist', icon: 'fa fa-pencil-square' },
      { label: 'Schedule Training', routerLink: '', icon: 'fa fa-pencil-square' },
      { label: 'Course Identify', routerLink: '', icon: 'fa fa-pencil-square' },
      { label: 'Course Results', routerLink: '/picklist', icon: 'fa fa-pencil-square' }
    ];
    this.breadcrumbsService.setBreadCrumbs(this.breadcrumbItems);

    this.defineQuestions();
  }

  ngOnInit() {
  }

  private defineQuestions(): void {
   // this.formDefinition = this.questionService.getDefinition('initialEntityRegistration', 'InitialEntityRegistration', '', true);
  }

}
