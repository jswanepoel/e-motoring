import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContextMenuModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';

import { PersonCreateComponent } from './person-create/person-create.component';
import { PersonListComponent } from './person-list/person-list.component';
import { AccountModule } from '../account/account.module';
import { NotificationModule } from '../notification/notification.module';
import { PersonService } from './person.service';

// Modules
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    BrowserModule,
    HttpClientModule,
    AccountModule,
    NotificationModule,
    NgbModule,
    ContextMenuModule,
    TableModule
  ],
  declarations: [
    PersonCreateComponent,
    PersonListComponent
  ],
  exports: [
    PersonCreateComponent,
    PersonListComponent
  ],
  providers: [
    PersonService
  ]
})
export class PersonModule {
}
