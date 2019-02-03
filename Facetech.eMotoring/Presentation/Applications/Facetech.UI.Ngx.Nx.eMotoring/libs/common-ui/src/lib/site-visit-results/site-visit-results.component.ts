import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-site-visit-results',
  templateUrl: './site-visit-results.component.html',
  styleUrls: ['./site-visit-results.component.css']
})
export class SiteVisitResultsComponent implements OnInit {

  public includeFooter: boolean = true; // Shell
  public bodyCenter = true; // Shell

  constructor() { }

  ngOnInit() {
  }

}
