import { Component, OnInit } from '@angular/core';
import { QuestionService, QuestionsContainer, BreadcrumbsService } from '@facetech/common-ui';

@Component({
  selector: 'ngx-vehicle-attributes',
  templateUrl: './vehicle-attributes.component.html',
  styleUrls: ['./vehicle-attributes.component.css']
})
export class VehicleAttributesComponent implements OnInit {

  public includeFooter: boolean = true;
  public bodyCenter = true;
  public breadcrumbItems: any;

  public formDefinition: QuestionsContainer;

  constructor(private breadcrumbsService: BreadcrumbsService, private questionService: QuestionService) {

    this.breadcrumbItems = [
      { label: 'Vehicle Attributes', routerLink: 'A2.1/vehicle-attributes', icon: 'fa fa-pencil-square' },
      { label: 'Document Upload', routerLink: '/document-upload', icon: 'fa fa-pencil-square' },
      { label: 'Verify Transaction', routerLink: '/verify', icon: 'fa fa-pencil-square' },
      { label: 'Schedule Training', routerLink: '/schedule-calendar-testpage', icon: 'fa fa-pencil-square' },
      { label: 'Representative', routerLink: '/A1.1/entity-detail', icon: 'fa fa-pencil-square' },
      { label: 'Verify Transaction', routerLink: '/verify', icon: 'fa fa-pencil-square' },
      { label: 'Prototype Request Acknowledgement', routerLink: '/report', icon: 'fa fa-pencil-square' },
      { label: 'Verify Transaction', routerLink: '/verify', icon: 'fa fa-pencil-square' }
    ];
    this.breadcrumbsService.setBreadCrumbs(this.breadcrumbItems);

    this.defineQuestions();
  }

  ngOnInit() {
  }

  private defineQuestions(): void {
    this.formDefinition = this.questionService.getDefinition('vehicleAttributes', 'VehicleAttributes', '', true);
  }

}
