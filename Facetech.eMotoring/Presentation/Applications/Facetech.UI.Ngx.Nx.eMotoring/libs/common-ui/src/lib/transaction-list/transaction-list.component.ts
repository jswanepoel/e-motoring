import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem, SortEvent } from 'primeng/api';

import { ParentService } from '../../services/parent.service';
import { Transaction } from '../../domain/grid';

@Component({
  selector: 'ngx-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
 
  public includeFooter: boolean = true;
  public bodyCenter = false;
  public items: any;
  public tableTools: any;
  public headers: string[];
  public title: string = "Transaction List";


  constructor() {
    this.items = [
      { "transactionId": "WAU2GAFC6DN079641", "transactionName": "Registration", "status": "Pending", "personAllocated": "DMT 1", "startDate": "12/26/2010" },
      { "transactionId": "WAU2GAFC6DN079642", "transactionName": "Transfer of vehicle", "status": "Pending", "personAllocated": "DMT 2", "startDate": "2/26/2010" },
      { "transactionId": "WAU2GAFC6DN079643", "transactionName": "Selling of vehicle", "status": "Pending", "personAllocated": "DMT 3", "startDate": "4/26/2010" },
      { "transactionId": "WAU2GAFC6DN079644", "transactionName": "Registration", "status": "Pending", "personAllocated": "DMT 1", "startDate": "1/26/2010" },
      { "transactionId": "WAU2GAFC6DN079645", "transactionName": "Registration", "status": "Pending", "personAllocated": "User", "startDate": "1/26/2010" },
      { "transactionId": "WAU2GAFC6DN079646", "transactionName": "Registration", "status": "Processing", "personAllocated": "DMT 1", "startDate": "2/26/2010" },
      { "transactionId": "WAU2GAFC6DN079647", "transactionName": "Registration", "status": "Processing", "personAllocated": "DMT 1", "startDate": "13/26/2010" },
      { "transactionId": "WAU2GAFC6DN079648", "transactionName": "Registration", "status": "Pending", "personAllocated": "DMT 1", "startDate": "10/6/2010" },
      { "transactionId": "WAU2GAFC6DN079649", "transactionName": "Registration", "status": "Processing", "personAllocated": "DMT 2", "startDate": "10/2/2010" },
      { "transactionId": "WAU2GAFC6DN079650", "transactionName": "Registration", "status": "Processing", "personAllocated": "DMT 1", "startDate": "10/26/2010" },
      { "transactionId": "WAU2GAFC6DN079612", "transactionName": "Registration", "status": "Pending", "personAllocated": "DMT 1", "startDate": "10/26/2010" },
      { "transactionId": "WAU2GAFC6DN079623", "transactionName": "Registration", "status": "Processing", "personAllocated": "DMT 5", "startDate": "10/26/2010" },
      { "transactionId": "WAU2GAFC6DN079645", "transactionName": "Registration", "status": "Processing", "personAllocated": "DMT 1", "startDate": "10/26/2010" },
      { "transactionId": "WAU2GAFC6DN079667", "transactionName": "Registration", "status": "Processing", "personAllocated": "DMT 1", "startDate": "10/26/2010" },
      { "transactionId": "WAU2GAFC6DN079689", "transactionName": "Registration", "status": "Pending", "personAllocated": "DMT 1", "startDate": "10/26/2010" },

    ];

    this.tableTools = [{ "gfilter": true, "filter": true, "select": false, "action": true, "sort": true, "row": 13, 'update': false }];
    this.headers = ["transactionId", "transactionName", "Registration", "status", "personAllocated","startDate"];

    this.tableTools = JSON.stringify(this.tableTools);
    this.items = JSON.stringify(this.items);
  }
  ngOnInit(): void {

  }
}
