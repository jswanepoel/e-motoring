import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs.service'; 

@Component({
  selector: 'ngx-picklist-table',
  templateUrl: './picklist-table.component.html',
  styleUrls: ['./picklist-table.component.css']
})
export class PicklistTableComponent {

  public includeFooter: boolean = true;
  public bodyCenter = true;
  public breadcrumbItems: any;

  public header: string;
  public source: any = [];
  public destination: any = [];

  @Input('componentHeader')
  set setComponentHeader(componentHeader: string) {
    this.header = componentHeader;
  }

  @Input('dataSetSource')
  set setDataSetSource(dataSetSource: any) {
    this.source = dataSetSource;
  }

  @Input('dataSetDestination')
  set setDataSetDestination(dataSetDestination: any) {
    this.destination = dataSetDestination;
  }

  constructor() {



  }

}
