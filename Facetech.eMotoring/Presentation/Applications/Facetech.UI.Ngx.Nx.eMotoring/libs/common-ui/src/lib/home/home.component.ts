import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

import { LoginService } from '../security/login.service';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        height: '*',
        width: '45%'
      })),
      state('out', style({
        height: '*',
        width: '25%'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  data: any;
  public menuItems: MenuItem[];
  helpMenuOpen3: string;
  helpMenuOpen4: string;
  helpMenuOpen2: string;
  public status: boolean;
  public subscription: Subscription;
  public helpMenuOpen: string;

  public constructor(
    private loginService: LoginService, public breadcrumbs: BreadcrumbsService) {

    this.menuItems = [];
    this.breadcrumbs.setBreadCrumbs(this.menuItems);
    this.data = {
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          "#E34234",
          "#36A2EB",
          "#FFCE56"
        ]
      }]
    };
  }
  
  public ngOnInit() {
    this.helpMenuOpen = 'out';
    this.helpMenuOpen2 = 'out';
    this.helpMenuOpen3 = 'out';
    this.helpMenuOpen4 = 'out';
    this.subscription = this.loginService
      .authNavStatus$
      .subscribe(status => this.status = status);
  }

  toggleHelpMenu(): void {
    this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
  }
  toggleHelpMenu2(): void {
    this.helpMenuOpen2 = this.helpMenuOpen2 === 'out' ? 'in' : 'out';
  }
  toggleHelpMenu3(): void {
    this.helpMenuOpen3 = this.helpMenuOpen3 === 'out' ? 'in' : 'out';
  }
  toggleHelpMenu4(): void {
    this.helpMenuOpen4 = this.helpMenuOpen4 === 'out' ? 'in' : 'out';
  }
}
