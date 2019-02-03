import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

import {
  QuestionsContainer,
  BreadcrumbsService,
  QuestionService,
  FormCreator,
  QuestionTypeNamespace
} from '@facetech/common-ui';

@Component({
  selector: 'ngx-identify-vehicle-and-owner',
  templateUrl: './identify-vehicle-and-owner.component.html',
  styleUrls: ['./identify-vehicle-and-owner.component.css']
})
export class IdentifyVehicleAndOwnerComponent implements OnInit {

  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public bodyCenter = true;
  private breadcrumbItems: MenuItem[];

  public formDefinition: QuestionsContainer;
  public questionData: any;
  public form: FormGroup;
  public payLoad = '';

  constructor(private crumbs: BreadcrumbsService, private questionService: QuestionService) {
    this.breadcrumbItems = [
      { label: 'Identify Vehicle And Owner', routerLink: '/C1.1/identify-vehicle-and-owner', icon: 'fa fa-pencil-square' },
      { label: 'Identify New Owner', routerLink: '/C1.1/identify-new-owner', icon: 'fa fa-pencil-square' },
      { label: 'New Owner Information', routerLink: '/C1.1/new-owner', icon: 'fa fa-pencil-square' },
      { label: 'On Behalf Of Owner', routerLink: '/C1.1/on-behalf-of-owner', icon: 'fa fa-pencil-square' },
      { label: 'Documents', routerLink: '/C1.1/documents', icon: 'fa fa-pencil-square' },
      { label: 'Current Owner Interest', routerLink: '/C1.1/current-owner-interest', icon: 'fa fa-pencil-square' },
      { label: 'Verify Current Interest', routerLink: '/C1.1/verify-interest', icon: 'fa fa-pencil-square' },
      { label: 'New Owner Interest', routerLink: '/C1.1/new-owner-interest', icon: 'fa fa-pencil-square' },
      { label: 'Verify New Interest', routerLink: '/C1.1/verify-interest', icon: 'fa fa-pencil-square' },
      { label: 'Generate MTA6', routerLink: '/transferor', icon: 'fa fa-pencil-square' },
      { label: 'Number Plate Options', routerLink: '/C1.1/number-plate-options', icon: 'fa fa-pencil-square' },
      { label: 'Payment Instruction', routerLink: '/C1.1/payment-instruction', icon: 'fa fa-pencil-square' },
      { label: 'Schedule Appointment', routerLink: '/C1.1/schedule-appointment', icon: 'fa fa-pencil-square' },
      { label: 'Upload Proof of Payment', routerLink: '/C1.1/upload-proof-of-payment', icon: 'fa fa-pencil-square' },
      { label: 'Verify Documents', routerLink: '/C1.1/verify-documents', icon: 'fa fa-pencil-square' }
    ];
    this.crumbs.setBreadCrumbs(this.breadcrumbItems);
    this.defineQuestions();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  private defineQuestions(): void {
    this.formDefinition = this.questionService.getDefinition('identifyVehicleAndOwner', 'IdentifyVehicleAndOwner', '', true);
  }

}
