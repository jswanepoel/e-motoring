import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'ngx-template-shell',
  templateUrl: './template-shell.component.html',
  styleUrls: ['./template-shell.component.css']
})
export class TemplateShellComponent {

  public includeFooter: boolean = true;
  public bodyCenter = true;

  constructor() {
  }
}
