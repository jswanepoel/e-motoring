import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@facetech/common-ui';

@Component({
  selector: 'ngx-inspection-of-assembled-vehicle',
  templateUrl: './inspection-of-assembled-vehicle.component.html',
  styleUrls: ['./inspection-of-assembled-vehicle.component.css']
})
export class InspectionOfAssembledVehicleComponent implements OnInit {



  public breadcrumbItems: any;
  public includeFooter: boolean = true;
  public bodyCenter = false;


  constructor(private crumbs: BreadcrumbsService) {
    this.breadcrumbItems = [
      { label: 'Identify Import Certificate ', routerLink: '/A3.6/inspection-of-assembled-vehicle', icon: 'fa fa-pencil-square' },
      { label: 'Capture Photos', routerLink: '/photo-capture', icon: 'fa fa-pencil-square' },
      { label: 'Verify Transaction', routerLink: '/verify', icon: 'fa fa-pencil-square' },
      { label: 'Generate and preview discrepancy report', routerLink: '/report', icon: 'fa fa-pencil-square' },
      { label: 'Generate and preview Certificate', routerLink: '/report', icon: 'fa fa-pencil-square' }

    ];
    this.crumbs.setBreadCrumbs(this.breadcrumbItems);
  }

  ngOnInit() {
  }
}
