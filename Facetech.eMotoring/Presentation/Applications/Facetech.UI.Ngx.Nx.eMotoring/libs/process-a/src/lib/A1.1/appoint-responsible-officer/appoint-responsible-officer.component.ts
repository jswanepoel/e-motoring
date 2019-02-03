import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-appoint-responsible-officer',
  templateUrl: './appoint-responsible-officer.component.html',
  styleUrls: ['./appoint-responsible-officer.component.css']
})
export class AppointResponsibleOfficerComponent implements OnInit {

  public includeFooter: boolean = true; // Shell
  public bodyCenter = true; // Shell

  constructor() { }

  ngOnInit() {
  }

}
