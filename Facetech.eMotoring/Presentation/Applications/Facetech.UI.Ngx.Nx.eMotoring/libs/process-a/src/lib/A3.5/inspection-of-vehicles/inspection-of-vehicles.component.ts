import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@facetech/common-ui';

@Component({
  selector: 'ngx-inspection-of-vehicles',
  templateUrl: './inspection-of-vehicles.component.html',
  styleUrls: ['./inspection-of-vehicles.component.css']
})
export class InspectionOfVehiclesComponent implements OnInit {


  public breadcrumbItems: any;
  public includeFooter: boolean = true;
  public bodyCenter = false;


  constructor(private crumbs: BreadcrumbsService) {
    this.breadcrumbItems = [
      { label: 'Identify Import Certificate ', routerLink: '/A3.5/inspection-of-vehicles', icon: 'fa fa-pencil-square' },
      { label: 'Capture Photos', routerLink: '/photo-capture', icon: 'fa fa-pencil-square' },
      { label: 'Verify Transaction', routerLink: '/verify', icon: 'fa fa-pencil-square' },
      { label: 'Generate VIC', routerLink: '/report', icon: 'fa fa-pencil-square' }

    ];
    this.crumbs.setBreadCrumbs(this.breadcrumbItems);

  }

  ngOnInit() {
  }
}
