import { Component, OnInit, ViewChildren, QueryList} from '@angular/core';
import { isNullOrUndefined } from 'util';
import { OverlayPanel, Panel } from 'primeng/primeng';
//import { QueryList } from '@angular/core/src/render3';

@Component({
  selector: 'ngx-numberplate-order',
  templateUrl: './numberplate-order.component.html',
  styleUrls: ['./numberplate-order.component.css']
})
/** numberplate-order component*/
export class NumberplateOrderComponent implements OnInit {

  cols: any[];
  savedOrders: PlateOrder[];
  orders: PlateOrder[];
  categories: PlateCategory[];
  unusedCategories: PlateCategory[] = [];
  adding: boolean = false;
  collapseCat: boolean = true;
  


  constructor() {
    this.cols = [
      { field: 'category', header: 'Category' },
      { field: 'description', header: 'Description' },
      { field: 'size', header: 'Size of Plates' },
      { field: 'amount', header: 'Total Pairs' }
    ];
    this.load();
  }

  ngOnInit(): void {
  }


  load() {
    this.categories = [//get from service
      { id: 1, description: 'Random description', size: '520 x 110mm' },
      { id: 2, description: 'Random description', size: '280 x 200mm' },
      { id: 3, description: 'Random description', size: '280 x 180mm' },
      { id: 4, description: 'Random description', size: '240 x 130mm' },
      { id: 5, description: 'Random description', size: '300 x 80mm' }
    ];

    this.savedOrders = [];
    this.orders = JSON.parse(JSON.stringify(this.savedOrders));
    this.setUnusedCategories();
    this.sortObjects();
    console.log(this.unusedCategories);
  }

  showCatPans(event:Event, addCatPan: OverlayPanel, addCatTarget) {
    // this.categoryPans.forEach(pan => { console.log(pan); pan.toggleable=true });
    // event.stopImmediatePropagation();
    addCatPan.toggle(event);    
  }

  setUnusedCategories() {
    this.unusedCategories = this.categories.filter(item => !(this.orders.some(x => x.categoryId == item.id)));
  }

  sortObjects() {
    this.orders.sort((a, b) => { return a.categoryId - b.categoryId });
    this.unusedCategories.sort((a, b) => { return a.id - b.id });
  }

  isUsedCategory(catId: number) {
    return this.orders.some(x => x.categoryId == catId);
  }

  onAddClick() {
    this.adding = !this.adding;
    
  }
  onPickDone(category: PlateCategory, pairs: number, addCatPan: OverlayPanel) {
    this.orders.push({
      orderId: Math.round(Math.random() * 100),
      categoryId: category.id,
      totalPairs: pairs,
      isNew: true
    });
    this.sortObjects();
    this.setUnusedCategories();
    addCatPan.hide();
  }
  
  onSaveClick() {
    let tobeDeleted: Array<PlateOrder> = this.orders.filter(x => {
      return x.flagDelete === true;
    }
    );
    if (!isNullOrUndefined(tobeDeleted)) {
      tobeDeleted.forEach(x => {
        this.orders.splice(
          this.orders.indexOf(x), 1);
      });
    }
    
    this.savedOrders = JSON.parse(JSON.stringify(this.orders));
    this.setUnusedCategories();
    this.sortObjects();
  }
  canSave(): boolean {
    return !this.orders.some(x => {
      return ((x.totalPairs < 1) && (x.flagDelete === undefined))
    });
  }

  onCancel() {
    this.orders = JSON.parse(JSON.stringify(this.savedOrders));
    this.setUnusedCategories();
  }

  onRemoveClick(ID: number) {
    let a = this.orders.find(x => x.orderId == ID);
    if (isNullOrUndefined(a.flagDelete)) {
      a.flagDelete = true;
    }
    else {
      a.flagDelete = undefined;
    }   
  }

  checkSaved(ID: number) {
    let savedData: PlateOrder = this.savedOrders.find(x => { return x.orderId === ID });
    let editedData: PlateOrder = this.orders.find(x => { return x.orderId === ID });
    if (isNullOrUndefined(savedData)) {
      return false
    }
    if (JSON.stringify(savedData) !== JSON.stringify(editedData)) {
      return false;
    }
    return true;
  }
}

interface PlateOrder {
  orderId: number,
  categoryId?: number,
  totalPairs: number,
  isNew: boolean,
  flagDelete?: boolean
}

interface PlateCategory {
  id: number,
  description: string,
  size: string
}
