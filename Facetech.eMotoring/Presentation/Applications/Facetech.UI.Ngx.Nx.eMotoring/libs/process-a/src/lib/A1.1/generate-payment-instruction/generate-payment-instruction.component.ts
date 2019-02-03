import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-generate-payment-instruction',
  templateUrl: './generate-payment-instruction.component.html',
  styleUrls: ['./generate-payment-instruction.component.css']
})
export class GeneratePaymentInstructionComponent implements OnInit {

  public includeFooter: boolean = true; // Shell
  public bodyCenter = true; // Shell

  constructor() { }

  ngOnInit() {
  }

}
