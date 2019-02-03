import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { BaseService } from '../../services/base.service';
import { ConfigService } from '../../services/config/config.service';
import { ICredential } from '../account/models/interfaces/credential.interface';
import { SessionSecurity } from '../security/session-security';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  private loggedIn: boolean = false;
  // Observable navItem source
  private authNavStatusSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public authNavStatus$ = this.authNavStatusSource.asObservable();
  public baseUrl: string = '';

  public constructor(
    private router: Router,
    private http: Http,
    private configService: ConfigService) {
    super();

    //this.loggedIn = !!sessionStorage.getItem('security');
    this.loggedIn = true;
    this.authNavStatusSource.next(this.loggedIn);
    this.baseUrl = this.configService.getApiURI();
  }

  public login(credential: ICredential) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${this.baseUrl}/auth/validate`,
      JSON.stringify(credential),
      { headers }).pipe(
        map(res => res.json()),
        map(res => {
          let security: SessionSecurity = new SessionSecurity(res);
          //this.addStorage<string>('auth_token', res.auth_token);
          //sessionStorage.setItem('auth_token', res.auth_token);
          sessionStorage.setItem('security', JSON.stringify(security));

          this.loggedIn = true;
          this.authNavStatusSource.next(true);
          return true;
      }),
      catchError(error => this.handleError(error)));
  }

  public logout() {
    sessionStorage.removeItem('security');
    // sessionStorage.removeItem('auth_token');
    this.loggedIn = false;
    this.authNavStatusSource.next(false);
    this.router.navigateByUrl('/');
  }

  public isLoggedIn() {
    return this.loggedIn;
  }

  private addStorage<T>(key: string, value: T): void {
    let json: string = '';
    if (typeof value !== 'string'
      || typeof value !== 'number') {
      json = JSON.stringify(value);
    } else {
      json = <string>value;
    }

    console.log(`${key}, ${json}`);
    sessionStorage.setItem(key, json);
    console.log(`${key}, ${sessionStorage.getItem(key)}`);
  }
}
