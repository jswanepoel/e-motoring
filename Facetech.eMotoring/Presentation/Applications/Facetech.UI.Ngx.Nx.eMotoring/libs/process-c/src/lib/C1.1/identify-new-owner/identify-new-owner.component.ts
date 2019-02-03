import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@facetech/common-ui';

@Component({
  selector: 'ngx-identify-new-owner',
  templateUrl: './identify-new-owner.component.html',
  styleUrls: ['./identify-new-owner.component.css']
})
export class IdentifyNewOwnerComponent implements OnInit {

  public breadcrumbItems: any; 

  constructor(private breadcrumbsService: BreadcrumbsService) {
    this.breadcrumbItems = [
      { label: 'Identify Person', routerLink: 'C1.1/identify-new-owner', icon: 'fa fa-pencil-square' },
      { label: 'Fingerprints', routerLink: '/fingerprints', icon: 'fa fa-pencil-square' },
      { label: 'Photo', routerLink: '/photo-capture', icon: 'fa fa-pencil-square' },
      { label: 'Signature', routerLink: '/signature', icon: 'fa fa-pencil-square' },
      { label: 'Documents', routerLink: '/documents', icon: 'fa fa-pencil-square' }
    ];
    this.breadcrumbsService.setBreadCrumbs(this.breadcrumbItems);
}

  ngOnInit() {
  }

}
