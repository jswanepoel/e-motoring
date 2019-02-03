import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-final-review',
  templateUrl: './final-review.component.html',
  styleUrls: ['./final-review.component.css']
})
export class FinalReviewComponent implements OnInit {

  public includeFooter: boolean = true; // Shell
  public bodyCenter = true; // Shell

  constructor() { }

  ngOnInit() {
  }

}
