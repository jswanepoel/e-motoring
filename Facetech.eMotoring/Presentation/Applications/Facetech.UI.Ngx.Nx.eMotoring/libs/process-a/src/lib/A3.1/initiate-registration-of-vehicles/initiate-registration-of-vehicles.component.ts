import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@facetech/common-ui';

@Component({
  selector: 'ngx-initiate-registration-of-vehicles',
  templateUrl: './initiate-registration-of-vehicles.component.html',
  styleUrls: ['./initiate-registration-of-vehicles.component.css']
})
export class InitiateRegistrationOfVehiclesComponent implements OnInit {

  public breadcrumbItems: any;
  public includeFooter: boolean = true;
  public bodyCenter = false;


  constructor(private crumbs: BreadcrumbsService) {

    this.breadcrumbItems = [
      { label: 'Identify Vehicle', routerLink: '/A3.1/initiate-registration-of-vehicles', icon: 'fa fa-pencil-square' },
      { label: 'Select Special Conditions', routerLink: '/picklist', icon: 'fa fa-pencil-square' },
      { label: 'Generate and preview Document', routerLink: '/report', icon: 'fa fa-pencil-square' },
      { label: 'Document Uplaod', routerLink: '/document-upload', icon: 'fa fa-pencil-square' }
    ];

   // this.cars = JSON.parse(this.cars);
 
    this.crumbs.setBreadCrumbs(this.breadcrumbItems);
    //this.defineQuestions();
  }

  ngOnInit() {
  }

}
