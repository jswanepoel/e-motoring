import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';

import {
  IParentData,
  IChildData,
  TrainingAttendeeData,
  TrainingSessionData,
  ParentService
} from '../../services/parent.service';

@Component({
    selector: 'ngx-training-managment',
    templateUrl: './training-managment.component.html',
    styleUrls: ['./training-managment.component.css']
})
export class TrainingManagmentComponent implements OnInit {

  parentHeader: string = 'Appointments';
  childHeader: string = 'Participants';
  userCompany: string = 'BMW';
  public includeFooter: boolean = false; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public bodyCenter = false;

  @ViewChild('dt') private _table: Table;

  _data: Array<IParentData<TrainingSessionData, TrainingAttendeeData>>;
  _savedData: Array<IParentData<TrainingSessionData, TrainingAttendeeData>>;
  parentHeaders: Array<{ field: string, header: string }>;
  childHeaders: Array<{ field: string, header: string }>;

  parentFields: Array<{ field: string,label:string}>;
  childFields: Array<{ field: string, label: string }>;
  selectedParentGroup: Array<IParentData<any,any>> = [] as Array<IParentData<any,any>> ;

  selectedParent: IParentData<any, any> = {} as IParentData<any, any>;
  selectedChild: IChildData<any> = {} as IChildData<any>;

  activeParent: IParentData<any,any>;
  activeChild: IChildData<any>;

  newParent: TrainingSessionData;
  newChild: TrainingAttendeeData;

  selectedDate: Date = new Date();
  filterByDate: boolean = false;
  reasonForRemoval: string = '';

  _selectParent: boolean;
  _selectChild: boolean;
  _actionParent: boolean;
  _actionChild: boolean;
  _selectionB: boolean;
  _edit: boolean;

  _newChild: boolean;
  _newParent: boolean;
  
  yearFilter: number;
  yearTimeout: any;
  rowGroupMetadata: any;

  childDialogs: {
    displayDialogChild?: boolean,
    displayDialogChildEdit?: boolean,
    displayDialogChildReject?: boolean,
    displayDialogChildDel?: boolean
  } = {};

  locationOptions: [{ label: string, value: [IParentData<TrainingSessionData, TrainingAttendeeData>] }?] = [];
  
  
  colCount: number = 3;

  constructor(private ParentService: ParentService, public router: Router) {

    this._selectParent = true;
    this._selectChild = false;
    this._actionParent = true;
    this._actionChild = true;
    this._selectionB = true;
    this._edit = true;

    
  }
  
  public ngOnInit() {
    this.ParentService.getTrainingSchedual().then(value => {
      this._savedData = value;
      this._data = value;
      this.setHeaders();
    });   

  }
  public setHeaders() {
    this.parentHeaders = [
      { field: 'date', header: 'Date' },
      { field: 'date', header: 'Time' },
      { field: '#calculatedAttend', header: 'Attending' },
      { field: '#calculatedStat', header: 'Status' }
    ];

    this.childHeaders = [
      { field: 'name', header: 'Attendee' },
      { field: 'company', header: 'Company' },
      { field: 'email', header: 'Email' }
    ];


    this.parentFields = [
      { field: 'date', label: 'Date' },
      { field: 'date', label: 'Time' },
      { field: 'available', label: 'Group Size' }
    ];   

    this._data.forEach(node => {
      let loc = this.locationOptions.find(loc => loc.label == node.data.location);
      if (loc) {
        loc.value.push(node);
      } else {
        this.locationOptions.push({ label: node.data.location, value: [node] });
      }
    });
    this.selectedParentGroup = this.locationOptions[0].value;
  }

  getDate(date: string): string {    
    return new Date(date).toLocaleDateString();
  }

  getTime(date: string): string {
    return new Date(date).toLocaleTimeString();
  }

  isPaginatorVisible(parOrChild): boolean {
    let res: boolean = false;
    try {
      switch (parOrChild) {
        case 'parent':
          {
            (this._data.length > 5) ? res = true : res = false;
            break;
          }
        case 'child': {
          (this.selectedParentGroup ? this.selectedParentGroup.length > 5 : false) ? res = true : res = false;
          break;
        }
        default:
      }
    } catch{
     // alert('Loading');
    }
    return res;
  }

  expandParent(parent) {

    (this.activeParent == parent) ? this.activeParent = undefined :  this.activeParent = parent;
  }

  childAction(action: string, data) {    
    switch (action) {
      case 'remove': {
        this.activeChild = data.data;
        this.childDialogs.displayDialogChildDel = true;
        break;
      }
      case 'move': { break; }
      case 'add': {
        this.activeParent = data;
        this.showDialogToAddChild();
        break;
      }
      default:
    }
  }
  
  public cancel() {
    this.newChild = undefined;
    this.reasonForRemoval = '';
    this._newChild = false;
    this.childDialogs = {
      displayDialogChild: false,
      displayDialogChildEdit: false,
      displayDialogChildDel: false,
      displayDialogChildReject: false
    };
  }



  public showDialogToAddChild() {
    this._newChild = true;
    this.newChild = {} as TrainingAttendeeData;
    this.newChild.id = Math.round(Math.random() * 10000).toString();
    this.childDialogs.displayDialogChildEdit = true;
  }

  public saveChild() {

    if (this._newChild) {
      this.activeParent.children.push({ data: this.newChild });
      this._newChild = false;
    }
    else {
      this.activeParent.children = this.activeParent.children.map(child => {
        if (child.data.id == this.activeChild.data.id) {
          return { data: this.cloneNode(this.newChild) };
        } else {
          return child;
        }
      });
    }
    this.newChild = undefined;
    this.childDialogs.displayDialogChildEdit = false;
    this.childDialogs.displayDialogChildDel = false;
  }
  
  public deleteChild() {
    this.activeParent.children.splice(this.activeParent.children.findIndex(a => a.data == this.activeChild), 1);
    this.activeChild = undefined;
    this.childDialogs.displayDialogChildDel = false;
    this.reasonForRemoval = '';
  }

  public cloneNode(c: any, empty?: boolean): any {
    let node: any = {};
    for (let prop in c) {
      empty ? node[prop]='': node[prop] = c[prop];
    }
    return node;
  }

}
  //parentAction(action:string, parentData) {
  //  this.activeParent = parentData;
  //  switch (action) {
  //    case 'remove': {
  //      this.parentDialogs.displayDialogParentDel = true;
  //      break;
  //    }
  //    case 'edit': {
  //      this.newParent = this.cloneNode(parentData);
  //      this.newParent.date = new Date(this.newParent.date);
  //      this.parentDialogs.displayDialogParentEdit = true;
  //      break;
  //    }
  //    case 'add': {
  //      this.showDialogToAddParent();
  //      break;
  //    }
  //    default:
  //  }
  //}

  ////Parent Operations

  //public showDialogToAddParent() {

  //  this._newParent = true;
  //  this.newParent = {} as TrainingSessionData;
  //  this.newParent.id = Math.round(Math.random() * 10000).toString();
  //  this.newParent.location = this.selectedParentGroup[0].data.location;
  //  this.newParent.hasChildren = this.selectedParentGroup[0].data.hasChildren;
  //  this.newParent.date = new Date();
  //  this.parentDialogs.displayDialogParentEdit = true;
  //}

  //public saveParent(newParent: IParentData<any,any>) {
  //  if (this._newParent) {
  //    this.selectedParentGroup.push({ data: newParent });
  //    this._newParent = false;
  //  }
  //  else {
  //    this.selectedParentGroup = this.selectedParentGroup.map(parent => {
  //      if (parent.data.id == this.newParent.id) {
  //        return { data: this.cloneNode(this.newParent) } ;
  //      } else {
  //        return parent;
  //      }
  //    });
  //  }
  //  this.newParent = undefined;
  //  this.parentDialogs.displayDialogParentEdit = false;
  //  this.parentDialogs.displayDialogParentDel = false;
  //}

  //public deleteParent() {
  //  let index = this.selectedParentGroup.indexOf(this.activeParent);
  //  this.selectedParentGroup = this.selectedParentGroup.filter((val, i) => i != index);
  //  this.activeParent = null;

  //  this.parentDialogs = {
  //    displayDialogParentEdit: false,
  //    displayDialogParentDel: false,
  //    displayDialogParentReject: false
  //  }

  //}
