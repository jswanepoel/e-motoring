import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-verify-test',
  templateUrl: './verify-test.component.html',
  styleUrls: ['./verify-test.component.css']
})
export class VerifyTestComponent implements OnInit {

  public header: string = "Validation";
  public disclaimer: string = "Pursuant to the Financial Regulations and Rules of UNDP, only the UNDP Authorized Official possess the authority to agree on behalf of UNDP to any modification of or change in this Agreement, to a waiver of any of its provisions or to any additional contractual relationship of any kind with the Contractor. Accordingly, no modification or change in this Contract shall be valid and enforceable against UNDP unless provided by an amendment to this Agreement signed by the Contractor and jointly by the UNDP Authorized Official..I confirm that the information given in this form is true, complete and accurate.";

  constructor() { }

  ngOnInit() {
  }

}
