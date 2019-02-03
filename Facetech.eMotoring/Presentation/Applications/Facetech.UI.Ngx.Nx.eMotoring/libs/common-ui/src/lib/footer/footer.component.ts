import { Component, OnInit, OnDestroy, Directive, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MenuItem, ConfirmationService } from 'primeng/api';

import { LoginService } from '../security/login.service';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'ngx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  public status: boolean;
  public subscription: Subscription;
  public menuItem: MenuItem[];

  public constructor(
    private loginService: LoginService,
    public breadcrumbs: BreadcrumbsService,
    public route: Router,
    private confirmationService: ConfirmationService) {
    this.menuItem = this.breadcrumbs.getBreadCrumbs();
  }

  public ngOnInit() {
    this.subscription = this.loginService
      .authNavStatus$
      .subscribe(status => this.status = status);
  }

  public next(): void {
    this.breadcrumbs.next();
 }

  public prev(): void {
    this.breadcrumbs.prev();
  }

  public ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

  public cancel(): void
  {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to exit the current transaction?',
      accept: () => {
        this.route.navigate(['/home']);
      }
    });
    
  }

  public logout() {
    this.loginService.logout();
  }
}
