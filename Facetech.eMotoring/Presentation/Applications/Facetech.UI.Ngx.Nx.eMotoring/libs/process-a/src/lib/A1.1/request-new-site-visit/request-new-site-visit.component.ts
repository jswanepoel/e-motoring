import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-request-new-site-visit',
  templateUrl: './request-new-site-visit.component.html',
  styleUrls: ['./request-new-site-visit.component.css']
})
export class RequestNewSiteVisitComponent implements OnInit {

  public includeFooter: boolean = true; // Shell
  public bodyCenter = true; // Shell

  constructor() { }

  ngOnInit() {
  }

}


