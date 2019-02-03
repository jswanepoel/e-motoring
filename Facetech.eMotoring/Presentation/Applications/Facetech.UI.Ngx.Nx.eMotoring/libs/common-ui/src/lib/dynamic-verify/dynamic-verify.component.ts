import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-verify',
  templateUrl: './dynamic-verify.component.html',
  styleUrls: ['./dynamic-verify.component.css']
})
export class DynamicVerifyComponent implements OnInit {
  public includeFooter: boolean = true;
  public bodyCenter = false;
  @Input() description: string;
  @Input() header: string;
  @Input() document: boolean;
  public constructor() {
  }

  public ngOnInit() {
  }
}
