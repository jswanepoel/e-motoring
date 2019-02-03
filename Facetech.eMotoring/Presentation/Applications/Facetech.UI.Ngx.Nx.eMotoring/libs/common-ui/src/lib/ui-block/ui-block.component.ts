import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ui-block',
  templateUrl: './ui-block.component.html',
  styleUrls: ['./ui-block.component.css']
})
export class UiBlockComponent implements OnInit {
  public blockedPanel: boolean = true;
  private blockedDocument: boolean = false;

  public constructor() { }

  public ngOnInit() {
  }
}

