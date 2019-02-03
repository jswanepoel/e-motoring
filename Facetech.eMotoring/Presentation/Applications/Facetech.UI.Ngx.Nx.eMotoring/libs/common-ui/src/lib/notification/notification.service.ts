import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Models
import { IMessage } from './models/interfaces/message.interface';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationMessage: BehaviorSubject<IMessage> = new BehaviorSubject<IMessage>({});
  private notificationMessage$: Observable<IMessage> = this.notificationMessage.asObservable();

  public constructor() {
  }

  public notify(message: IMessage): void {
    this.notificationMessage.next(message);
  }

  public notification(): Observable<IMessage> {
    return this.notificationMessage$;
  }
}
