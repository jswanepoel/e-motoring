import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, SelectItem, SortEvent } from 'primeng/api';

import {
  ParentService,
  BreadcrumbsService,
  Vehicle
} from '@facetech/common-ui';
import { ProcessBService } from '../../services/process-b.service';

@Component({
  selector: 'ngx-update-vehicle-information',
  templateUrl: './update-vehicle-information.component.html',
  styleUrls: ['./update-vehicle-information.component.css']
})
export class UpdateVehicleInformationComponent implements OnInit {
  private menuItems: MenuItem[];
  public includeFooter: boolean = true;
  public actionParent: boolean;
  public actionChild: boolean;
  public selectParent: boolean;
  public search: boolean;
  public sortParent: boolean;
  public filterParent: boolean;
  public filterChild: boolean;
  public gFilterParent: boolean;
  public gFilterChild: boolean;
  public selectionB: boolean;
  public edit: boolean;
  public filterExpansion: boolean;
  public filterExpansionP: boolean;
  public newParent: boolean;
  public people: Vehicle[];
  public selectedParent: Vehicle;
  public cols: any[];
  public cols2: any[];
  public brands: SelectItem[];
  public colors: SelectItem[];
  public yearFilter: number;
  public yearTimeout: any;
  public rowGroupMetadata: any;
  public detailsdata: Vehicle[];
  public parent: Vehicle;
  public parentModel: Vehicle;
  public displayDialogParentReject: boolean;
  public parentHeaders: string[];
  public parentHeadersReal: string[];
  public colCount: number = 3;
  public carRegister: boolean;
  public bodyCenter = false;

  public constructor(
    private breadcrumbs: BreadcrumbsService,
    public router: Router,
    private parentService: ParentService,
    private processBService: ProcessBService) {


    this.menuItems = [
      { label: 'Search vehicle', routerLink: '/B2.1/update-vehicle-info', icon: 'pi pi-pencil' },
      { label: 'Display vehicle', routerLink: '/B2.1/display-vehicle-info', icon: 'pi pi-image' },
      { label: 'Buyer details limited', routerLink: '/B2.1/buyer-limited-information-capture', icon: 'pi pi-align-center' },
      { label: 'Document upload', routerLink: '/document-upload', icon: 'pi pi-file' },
      { label: 'Buyer details', routerLink: '/B2.1/buyer-information-capture', icon: 'pi pi-align-center' },
      { label: 'Document upload', routerLink: '/document-upload', icon: 'pi pi-file' },
      { label: 'Select interest', routerLink: '/C1.1/current-owner-interest', icon: 'fa fa-check-square-o' },
      { label: 'Representive Detail', routerLink: '/signatory-capture', icon: 'fa fa-pencil-square' },
      { label: 'Select Representive', routerLink: '/picklist', icon: 'fa fa-pencil-square' },
      { label: 'Interested entities', routerLink: '/B2.1/entities-of-interest', icon: 'pi pi-dollar' },
      { label: 'Document upload', routerLink: '/document-upload', icon: 'pi pi-file' },
      { label: 'Generate MTA2 form', routerLink: '/report', icon: 'fa fa-pencil-square-o' },
      { label: 'Scan signed MTA2', routerLink: '/document-upload', icon: 'fa fa-barcode' }
    ];
    this.breadcrumbs.setBreadCrumbs(this.menuItems);


    this.selectParent = false;
    this.actionChild = true;
    this.actionParent = false;
    this.sortParent = false;
    this.gFilterParent = true;
    this.gFilterChild = true;
    this.filterParent = false;
    this.filterChild = true;
    this.selectionB = true;
    this.edit = true;
    this.filterExpansion = false;
    this.filterExpansionP = false;
    this.search = false;
    this.carRegister = false;
  }

  public ngOnInit() {
    if (this.selectParent == true) { this.actionParent = false; }
    else { this.colCount = 2; }
    if (this.actionParent == false) { this.colCount = 2; }
    this.cols = [];
    this.cols2 = [];
    this.parentHeaders = [];
    this.parentHeadersReal = [];
    this.parentService.getVehicle().then(people => this.people = people);
    this.parentService.getVehicle().then((value) => {
      this.detailsdata = value;
      this.setOp(Object.keys(this.detailsdata[1]));
    });
  }

  public setOp(parentHeaders: any) {
    var tmp: string = "";
    for (var i = 0; i < parentHeaders.length; i++) {
      tmp = parentHeaders[i];
      tmp = tmp.replace(/([A-Z])/g, ' $1');
      tmp = tmp.replace(/^./, function (str) {
        return str.toUpperCase();
      });

      if (tmp == 'Vin' || tmp == 'Color' || tmp == 'Make') {
        this.cols2.push({ field: parentHeaders[i], header: parentHeaders[i] });
        this.parentHeaders.push(tmp);
        this.parentHeadersReal.push(parentHeaders[i]);
      } else {
        this.parentHeadersReal.push(parentHeaders[i]);
      }
    }
  }

  public Search() {
    this.search = true;
  }

  public onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');
    }, 250);
  }

  public toggleFilterVisibility(): boolean {
    if (this.filterExpansion) { this.filterExpansion = false; }
    else { this.filterExpansion = true; }

    return this.filterExpansion;
  }

  public toggleFilterPVisibility(): boolean {
    if (this.filterExpansionP) { this.filterExpansionP = false; }
    else { this.filterExpansionP = true; }

    return this.filterExpansionP;
  }

  public customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;


      return (event.order * result);
    });
  }

  public StoreVehicleSelected(): void {
    this.processBService.SetVehicle(this.selectedParent);
    this.router.navigate(['/B2.1/display-vehicle-info']);
  }

  public cancel() {
    this.displayDialogParentReject = false;
  }

  // Parent Operations
  public showDialogToAddParent() {
    this.newParent = true;
    this.parent = {};
  }

  public selectParentRow(parent: Vehicle, expanded) {
    this.selectedParent = parent;
    this.newParent = false;
    this.parent = this.cloneParent(parent);
  }

  public selectParentWithButtonEdit(parent: Vehicle) {
    this.selectedParent = parent;
    this.newParent = false;
    this.parent = this.cloneParent(parent);
  }

  public selectParentWithButtonDel(parent: Vehicle) {
    this.selectedParent = parent;
    this.newParent = false;
    this.parent = this.cloneParent(parent);
    this.displayDialogParentReject = true;
  }

  public parse(a: number): string {
    return a.toString();
  }

  public cloneParent(c: Vehicle): Vehicle {
    let parent = {};
    for (let prop in c) {
      parent[prop] = c[prop];
    }
    return parent;
  }
}
