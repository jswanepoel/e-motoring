import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { IMessage } from '../../notification/models/interfaces/message.interface';
import { Message } from '../../notification/models/message';
import { MessageType } from '../../notification/models/enums/message-type';
import { ICredential } from '../models/interfaces/credential.interface';
import { LoginService } from '../../security/login.service';
import { NotificationService } from '../../notification/notification.service';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public faUserCircle = faUserCircle;
  public errors: string;
  public isRequesting: boolean;
  public submitted: boolean = false;
  public credential: ICredential = {
    username: '',
    detail: '',
    baseActionValue: '',
    baseFunctionValue: '',
    baseRequiredDatabase: [],
    detailDTL: '',
    userNameDTL: ''
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private notificationService: NotificationService) {
  }

  public ngOnInit(): void {
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams
      .subscribe((params: any) => {
        this.credential.username = 'username' in params ? params.username : '';
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public login({ value, valid }: {
    value: {
      username,
      detail,
      baseActionValue,
      baseFunctionValue,
      baseRequiredDatabase,
      detailDTL,
      userNameDTL
    }, valid: boolean
  }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';

    value.baseActionValue = 'SIGN_IN';
    value.baseFunctionValue = 'USER_ACCESS';
    value.baseRequiredDatabase = ['SystemUserDBID'];
    value.userNameDTL = 'MasterKey';
    value.detailDTL = '1111'

    if (valid) {
      this.loginService.login(value).pipe(finalize(() => this.isRequesting = false))
        .subscribe(result => {
          if (result) {
            this.loginSuccess();
            this.router.navigate(['/home']);
          }
        },
        error => this.loginFailure(error));
    }
  }

  private notify(message: IMessage): void {
    this.notificationService.notify(message);
  }

  private loginFailure(error: any): void {
    this.notify(Message.create(MessageType.Error, 'Authentication Failure', error));
  }

  private loginSuccess(): void {
    this.notify(Message.create(
      MessageType.Success,
      'Authentication Success',
      'User authentication has been successful.'));
  }
}
