import { Component, OnInit, OnDestroy, Input, DoCheck, ViewChild } from '@angular/core';
import { SelectItem, SortEvent, MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs.service';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { ReadFile, FilePickerDirective } from 'ngx-file-helpers';

@Component({
  selector: 'ngx-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, DoCheck {

  @Input('model') Model: any;
  @Input('headers') headers: any;
  @Input('tableTools') tableTools: any;
  @Input('title') title: string;
  @Input('action') action: string;
  @ViewChild(FilePickerDirective)
  private filePicker;
  picked: ReadFile;


  edit: boolean;
  upload: boolean;
  actionParent: boolean;
  sortParent: boolean;
  selectParent: boolean;
  filterParent: boolean;
  gFilterParent: boolean;
  newParent: boolean;
  items: any[];
  filterExpansionP: boolean;
  selectedParent: any;
  cols: any[];
  cols2: any[];
  tools: any;


  actionChild: boolean;
  selectChild: boolean;
  sortChild: boolean;
  filterChild: boolean;
  gFilterChild: boolean;
  selectionB: boolean;
  filterExpansion: boolean;
  newChild: boolean;
  Parent: any;
  key: string;
  displayDialogParentEdit: boolean;
  displayDialogParentReject: boolean;
  displayDialogParentDel: boolean;
  colCount: number = 3;
  parentHeaders: string[];

  ngDoCheck(): void {
    if (this.title == "S") {
      this.items = JSON.parse(this.Model);
      this.items = [...this.items];
    }
  }

  private menuItems: MenuItem[];

  constructor(public router: Router,
    private breadcumbs: BreadcrumbsService,
    private http: HttpClient) {
    this.selectionB = false;
    this.edit = false;
    this.filterExpansionP = false;



  }


  public ngOnInit() {

    this.tools = JSON.parse(this.tableTools);
    this.gFilterParent = this.tools[0].gfilter;
    this.filterParent = this.tools[0].filter;
    this.selectParent = this.tools[0].select;
    this.actionParent = this.tools[0].action;
    this.sortParent = this.tools[0].sort;
    console.log(this.action);




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
    //this.childHeaders = [];

    let mDeal = JSON.parse(this.Model);




    this.items = mDeal;
    //  this.detailsdata = this.items;
    //console.log(Object.keys(mDeal[0]));
    this.key = Object.keys(mDeal[0])[0];
    this.setOp(Object.keys(mDeal[0]));


  }

  public decamelize(str): string {
    return str.replace(/([A-Z])/g, (match) => ` ${match}`)
      .replace(/^./, (match) => match.toUpperCase());
  }

  public setOp(_parentHeaders: any) {
    let array = this.headers.split(",");
    for (var _i = 0; _i < _parentHeaders.length; _i++) {
      this.parentHeaders.push(_parentHeaders[_i]);
      if (array.length > 1) {
        for (var x = 0; x < array.length; x++) {
          if (array[x] == _parentHeaders[_i]) {

            this.cols2.push({ field: _parentHeaders[_i], header: _parentHeaders[_i] });
            //        this.parentHeaders.push(_parentHeaders[_i]);
          }
        }
      }
      else {
        this.cols2.push({ field: _parentHeaders[_i], header: _parentHeaders[_i] });
        //        this.parentHeaders.push(_parentHeaders[_i]);
      }
    }
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

  public goToReg() {
    this.router.navigate(['/register']);
  }

  public cancel() {
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

  }

  public selectParentRow(parent: any, expanded) {
    this.selectedParent = parent;
    this.newParent = false;
    this.Parent = this.cloneParent(parent);
  }

  public saveParent() {
    let items = [...this.items];
    if (this.newParent) {
      items.push(this.Parent);
    } else {
      items[this.items.indexOf(this.selectedParent)] = this.Parent;
    }
    this.items = items;
    this.Parent = null;
    this.displayDialogParentEdit = false;
    this.displayDialogParentDel = false;
  }

  public deleteParent() {
    let index = this.items.indexOf(this.selectedParent);
    this.items = this.items.filter((val, i) => i != index);
    this.Parent = null;
    this.displayDialogParentEdit = false;
    this.displayDialogParentDel = false;
    this.displayDialogParentReject = false;
  }


  public selectParentWithButtonEdit(parent: any) {
    this.selectedParent = parent;
    this.newParent = false;
    this.Parent = this.cloneParent(parent);
    this.displayDialogParentEdit = true;
  }

  public selectParentWithButtonDel(parent: any) {
    this.selectedParent = parent;
    this.newParent = false;
    this.Parent = this.cloneParent(parent);
    this.displayDialogParentReject = true;
  }


  public cloneParent(c: any): any {
    let Parent = {};
    for (let prop in c) {
      Parent[prop] = c[prop];
    }
    return Parent;
  }

  public filterFileBeforeReading(file): boolean {
    if (file.size > 1024 * 1024) {
      console.log('File -> Size violation.');
    }
    return file.size <= 1024 * 1024;
  }

  public onReadStart(fileCount: number): void {
    // console.log('File -> ReadStart()');
  }

  public onFilePicked(file: ReadFile, event?: any): void {
    this.picked = file;
    if (event != null) {
      this.items[this.items.indexOf(event)] = { 'filename': this.picked.name, 'type': 'file type', 'size': this.picked.size + 'KB' };
    }
    else {
      this.items.push({ 'filename': this.picked.name, 'type': 'file type', 'size': this.picked.size + 'KB' });

    }
    console.log(this.items);
  }


  public onReadEnd(fileCount: number): void {
    this.filePicker.reset();
    //console.log('File -> ReadEnd().');
  }


}
