import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@facetech/common-ui';

@Component({
  selector: 'ngx-registration-of-single-vehicles',
  templateUrl: './registration-of-single-vehicles.component.html',
  styleUrls: ['./registration-of-single-vehicles.component.css']
})
export class RegistrationOfSingleVehiclesComponent implements OnInit {

  public breadcrumbItems: any;
  public includeFooter: boolean = true;
  public bodyCenter = false;




  constructor(private crumbs: BreadcrumbsService) {
 
    this.breadcrumbItems = [
      { label: 'Identify Import Certificate  ', routerLink: '/A3.2/registration-of-single-vehicles', icon: 'fa fa-pencil-square' },
      { label: 'Additional Vehicle Information', routerLink: '/A3.2/additional-vehicle-information', icon: 'fa fa-pencil-square' },
      { label: 'Document Uplaod', routerLink: '/document-upload', icon: 'fa fa-pencil-square' },
      { label: 'Photo Capture', routerLink: '/photo-capture', icon: 'fa fa-pencil-square' },
      { label: 'Uploaded Photos And Issues', routerLink: '/document-upload', icon: 'fa fa-pencil-square' },
      { label: 'Verify Transaction', routerLink: '/verify', icon: 'fa fa-pencil-square' },
      { label: 'Verify Transaction', routerLink: '/verify', icon: 'fa fa-pencil-square' },
      { label: 'Generate VIC', routerLink: '/report', icon: 'fa fa-pencil-square' }
    ];
    this.crumbs.setBreadCrumbs(this.breadcrumbItems);
    //this.defineQuestions();


  }

  ngOnInit() {
  }

}
