import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@facetech/common-ui';

@Component({
  selector: 'ngx-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {

  public breadcrumbItems: any;

  constructor(private crumbs: BreadcrumbsService) {
    this.breadcrumbItems = [
      { label: 'Identify Vehicle', routerLink: '/A1.1/initial-entity-registration', icon: 'fa fa-pencil-square' },
      { label: 'Generate and preview Vehicle inspection', routerLink: '/report', icon: 'fa fa-pencil-square' },
      { label: 'Generate Payment Instruction', routerLink: '/report', icon: 'fa fa-pencil-square' },
      { label: 'Schedule Appointment', routerLink: '/schedule-calendar-testpage', icon: 'fa fa-pencil-square' },
      { label: 'Identify Transaction', routerLink: '/A1.1/entity-detail', icon: 'fa fa-pencil-square' },
      { label: 'Assign Officer responsible for Inspection', routerLink: '/A1.1/entity-detail', icon: 'fa fa-pencil-square' },
      { label: 'Documents confirm and upload/scan', routerLink: '/document-upload', icon: 'fa fa-pencil-square' },
      { label: 'Inspection Results ', routerLink: '/report', icon: 'fa fa-pencil-square' }
    ];
    this.crumbs.setBreadCrumbs(this.breadcrumbItems);
  }

  ngOnInit() {
  }

}
