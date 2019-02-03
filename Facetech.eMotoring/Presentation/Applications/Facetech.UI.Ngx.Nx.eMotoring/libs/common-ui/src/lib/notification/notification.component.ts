import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

import { NotificationService } from './notification.service';

@Component({
  selector: 'ngx-notification',
  templateUrl: './notification.component.html',
  providers: [
    NotificationService
  ]
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() styleClass: string = 'pt-5';
  @Input() position: string = 'top-right';

  private notificationRef: Subscription;
  public constructor(
    private notificationService: NotificationService,
    private messageService: MessageService) {
  }

  public ngOnInit(): void {
    console.log('Notification Component');
    this.subscribe();
  }

  public ngOnDestroy(): void {
    this.unSubscribe();
  }

  private subscribe(): void {
    this.notification();
  }

  private unSubscribe(): void {
    this.notificationRef.unsubscribe();
  }

  private notification(): void {
    this.notificationService
      .notification()
      .subscribe((message) => {
        this.messageService.add(message);
      });
  }
}
