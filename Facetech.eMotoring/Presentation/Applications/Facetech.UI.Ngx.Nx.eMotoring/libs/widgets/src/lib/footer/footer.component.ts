import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
//import { LoginService } from '../security/login.service';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs.service';


@Component({
  selector: 'ngx-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.css'
  ],
  providers: [
    BreadcrumbsService
  ]
})
export class FooterComponent implements OnInit, OnDestroy {
  public status: boolean;
  public subscription: Subscription;
  public menuItem: MenuItem[];

  public constructor(
    //private loginService: LoginService,
    public breadcrumbs: BreadcrumbsService,
    public route: Router) {
    this.menuItem = this.breadcrumbs.getBreadCrumbs();
  }

  public ngOnInit() {
    //this.subscription = this.loginService
    //  .authNavStatus$
    //  .subscribe(status => this.status = status);
  }

  public next(): void {
    this.breadcrumbs.next();
  }

  public prev(): void {
    this.breadcrumbs.prev();
  }

  public ngOnDestroy() {
    // prevent memory leak when component is destroyed
    //this.subscription.unsubscribe();
  }

  //public logout() {
  //  this.loginService.logout();
  //}
}
