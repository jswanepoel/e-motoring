import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-entities-of-interest',
  templateUrl: './entities-of-interest.component.html',
  styleUrls: ['./entities-of-interest.component.css']
})
export class EntitiesOfInterestComponent implements OnInit {
  public header: string = "Party of Interest validation";

  public disclaimer: string = "I confirm that the information given in this form is true, complete and accurate.";

  constructor() { }

  ngOnInit() {
  }

}
