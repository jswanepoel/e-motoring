import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-garage-plates',
  templateUrl: './garage-plates.component.html',
  styleUrls: ['./garage-plates.component.css']
})
export class GaragePlatesComponent implements OnInit {

  public includeFooter: boolean = true; // Shell
  public bodyCenter = true; // Shell

  constructor() { }

  ngOnInit() {
  }

}
