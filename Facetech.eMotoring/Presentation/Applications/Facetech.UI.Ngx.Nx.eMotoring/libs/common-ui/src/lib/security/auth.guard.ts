// auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public constructor(
    private login: LoginService,
    private router: Router) { }

  public canActivate() {
    if (!this.login.isLoggedIn()) {
      this.router.navigate(['/account/login']);
      return false;
    }
    return true;
  }
}
