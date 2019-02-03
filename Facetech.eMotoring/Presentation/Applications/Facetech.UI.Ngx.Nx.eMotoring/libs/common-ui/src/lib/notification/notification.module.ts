import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

// Components
import { NotificationComponent } from './notification.component';

// Service
import { NotificationService } from './notification.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  exports: [
    NotificationComponent
  ],
  declarations: [
    NotificationComponent
  ],
  providers: [
    MessageService
  ]
})
export class NotificationModule {
}
