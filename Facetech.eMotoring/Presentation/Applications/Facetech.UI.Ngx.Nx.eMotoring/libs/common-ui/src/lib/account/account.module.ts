import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AccountRoutingModule } from './account.routing';
import { AccountLoginComponent } from './account-login/account-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    AccountRoutingModule,
  ],
  exports: [
    AccountLoginComponent
  ],
  declarations: [
    AccountLoginComponent
  ]
})
export class AccountModule {
}
