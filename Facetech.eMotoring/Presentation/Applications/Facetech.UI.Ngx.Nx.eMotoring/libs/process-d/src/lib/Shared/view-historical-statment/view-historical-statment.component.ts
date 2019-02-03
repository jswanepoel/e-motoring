import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'ngx-view-historical-statment',
    templateUrl: './view-historical-statment.component.html',
    styleUrls: ['./view-historical-statment.component.css']
})
/** ViewHistoricalStatment component*/
export class ViewHistoricalStatmentComponent {

  @ViewChild('contentSize') contentSize: ElementRef; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()

  constructor() {
  }

  // Base Template method : Do not alter
  public calculateCardBodyHeight(): number {
    let offset = 0;

    if (this.contentSize.nativeElement.offsetHeight > 665) {
      offset = this.includeFooter ? 72 : 72;
    }
    else {
      offset = this.includeFooter ? 127 : 72;
    }

    let calculatedheight = window.innerHeight - 176 - offset;
    return calculatedheight < 200 ? 200 : calculatedheight;
  }
}
