import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@facetech/common-ui';

@Component({
  selector: 'ngx-release-bulk-vehicles',
  templateUrl: './release-bulk-vehicles.component.html',
  styleUrls: ['./release-bulk-vehicles.component.css']
})
export class ReleaseBulkVehiclesComponent implements OnInit {


  public breadcrumbItems: any;
  public includeFooter: boolean = true;
  public bodyCenter = false;



  constructor(private crumbs: BreadcrumbsService) {
    this.breadcrumbItems = [
      { label: 'Identify Import Certificate ', routerLink: '/A3.4/release-bulk-vehicles', icon: 'fa fa-pencil-square' },
      { label: 'Additional Vehicle Information', routerLink: '/A3.2/additional-vehicle-information', icon: 'fa fa-pencil-square' },
      { label: 'Document Uplaod', routerLink: '/document-upload', icon: 'fa fa-pencil-square' },
      { label: 'Uploaded Photos And Issues', routerLink: '/document-upload', icon: 'fa fa-pencil-square' },
      { label: 'Verify Transaction', routerLink: '/verify', icon: 'fa fa-pencil-square' },
      { label: 'Verify Transaction', routerLink: '/verify', icon: 'fa fa-pencil-square' },
      { label: ' Issue Bulk Vehicle Release Note', routerLink: '/report', icon: 'fa fa-pencil-square' }

    ];
    this.crumbs.setBreadCrumbs(this.breadcrumbItems);
  }

  ngOnInit() {
  }
}
