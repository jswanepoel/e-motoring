import { Component, OnInit } from '@angular/core';

import { MenuItem, SelectItem, SortEvent } from 'primeng/api';
import { ParentService, BreadcrumbsService } from '@facetech/common-ui';
import { Router } from '@angular/router';
import { Vehicle } from '../../';

@Component({
  selector: 'ngx-vehicle-status',
  templateUrl: './vehicle-status.component.html',
  styleUrls: ['./vehicle-status.component.css']
})
export class VehicleStatusComponent implements OnInit {
  exp: boolean = true;
  actionParent: boolean;
  actionChild: boolean;
  selectParent: boolean;
  selectChild: boolean;
  sortParent: boolean;
  sortChild: boolean;
  filterParent: boolean;
  filterChild: boolean;
  gFilterParent: boolean;
  gFilterChild: boolean;
  selectionB: boolean;
  edit: boolean;
  filterExpansion: boolean;
  filterExpansionP: boolean;
  newChild: boolean;
  newParent: boolean;
  people: Vehicle[];
  selectedParent: Vehicle;
  cols: any[];
  cols2: any[];
  brands: SelectItem[];
  colors: SelectItem[];
  yearFilter: number;
  yearTimeout: any;
  rowGroupMetadata: any;
  displayDialogChild: boolean;
  detailsdata: Vehicle[];
  Parent: Vehicle;
  ParentModel: Vehicle;
  displayDialogParentEdit: boolean;
  displayDialogParentReject: boolean;
  displayDialogParentDel: boolean;
  displayDialogChildEdit: boolean;
  displayDialogChildDel: boolean;
  parentHeaders: string[];
  parentHeadersDialog: string[];
  childHeaders: string[];
  Child: any;
  selectedChild: Vehicle;
  colCount: number = 3;
  private menuItems: MenuItem[];
  public includeFooter: boolean = false;
  public bodyCenter = true;

  constructor(
    private parentService: ParentService,
    public router: Router,
    private breadcumbs: BreadcrumbsService) {

    this.menuItems = [];
    this.breadcumbs.setBreadCrumbs(this.menuItems);
    this.selectParent = false;
    this.selectChild = true;
    this.actionChild = true;
    this.actionParent = true;
    this.sortParent = true;
    this.sortChild = true;
    this.gFilterParent = true;
    this.gFilterChild = true;
    this.filterParent = true;
    this.filterChild = true;
    this.selectionB = true;
    this.edit = true;
    this.filterExpansion = false;
    this.filterExpansionP = false;
  }

  public ngOnInit() {
    if (this.selectParent == true) {
      this.actionParent = false;
    } else {
      this.colCount = 2;
    }

    if (this.actionParent == false) {
      this.colCount = 2;
    }

    this.cols = [];
    this.cols2 = [];
    this.parentHeaders = [];
    this.parentHeadersDialog = [];
    this.childHeaders = [];
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
      if (parentHeaders[i] != "modelDescription") {
      this.cols2.push({ field: parentHeaders[i], header: parentHeaders[i] });
      this.parentHeaders.push(tmp);
        this.parentHeadersDialog.push(parentHeaders[i]);
      }
    }
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
    if (this.filterExpansion) {
      this.filterExpansion = false;
    } else {
      this.filterExpansion = true;
    }

    return this.filterExpansion;
  }

  public toggleFilterPVisibility(): boolean {
    if (this.filterExpansionP) {
      this.filterExpansionP = false;
    } else {
      this.filterExpansionP = true;
    }

    return this.filterExpansionP;
  }

  public customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) {
        result = -1;
      } else if (value1 != null && value2 == null) {
        result = 1;
      } else if (value1 == null && value2 == null) {
        result = 0;
      } else if (typeof value1 === 'string' && typeof value2 === 'string') {
        result = value1.localeCompare(value2);
      } else {
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
      }

      return (event.order * result);
    });
  }

  private goToReg() {
    this.router.navigate(['/register']);
  }

  public cancel() {
    this.displayDialogChildEdit = false;
    this.displayDialogChildDel = false;
    this.displayDialogParentEdit = false;
    this.displayDialogParentDel = false;
    this.displayDialogParentReject = false;
  }

  //Parent Operations
  public showDialogToAddParent() {
    this.newParent = true;
    this.Parent = {};
    this.displayDialogParentEdit = true;
  }

  public showDialogToAddChild() {
    this.newChild = true;
    this.Child = {};
    this.displayDialogChildEdit = true;
  }

  public selectParentRow(parent: Vehicle) {
    this.selectedParent = parent;
    this.newParent = false;
    this.Parent = this.cloneParent(parent);
  }

  public saveParent() {
    let people = [...this.people];
    if (this.newParent) {
      people.push(this.Parent);
    } else {
      people[this.people.indexOf(this.selectedParent)] = this.Parent;
    }

    this.people = people;
    this.Parent = null;
    this.displayDialogParentEdit = false;
    this.displayDialogParentDel = false;
  }

  public deleteParent() {
    let index = this.people.indexOf(this.selectedParent);
    this.people = this.people.filter((val, i) => i != index);
    this.Parent = null;
    this.displayDialogParentEdit = false;
    this.displayDialogParentDel = false;
    this.displayDialogParentReject = false;
  }

  public selectParentWithButtonEdit(parent: Vehicle) {
    this.selectedParent = parent;
    this.newParent = false;
    this.Parent = this.cloneParent(parent);
    this.deleteParent();
  }

  public selectParentWithButtonDel(parent: Vehicle) {
    this.selectedParent = parent;
    this.newParent = false;
    this.Parent = this.cloneParent(parent);
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
