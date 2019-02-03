import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-verify-documents',
  templateUrl: './verify-documents.component.html',
  styleUrls: ['./verify-documents.component.css']
})
export class VerifyDocumentsComponent implements OnInit {

  public includeFooter: boolean = true; // Shell
  public bodyCenter = true; // Shell
  public header: string = "Party of Interest validation";

  public disclaimer: string = "I confirm that the information given in this form is true, complete and accurate.";

  constructor() { }

  ngOnInit() {
  }

}
