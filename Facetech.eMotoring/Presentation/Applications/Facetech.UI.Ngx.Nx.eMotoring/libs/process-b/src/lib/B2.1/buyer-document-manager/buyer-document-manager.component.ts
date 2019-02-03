import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-buyer-document-manager',
  templateUrl: './buyer-document-manager.component.html',
  styleUrls: ['./buyer-document-manager.component.css']
})
export class BuyerDocumentManagerComponent implements OnInit {
  public includeFooter: boolean = false; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public bodyCenter = true;
  public option: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
