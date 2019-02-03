import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public bodyCenter = false;

  public constructor() {
  }

  public ngOnInit() {
  }
}
