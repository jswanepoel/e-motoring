import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// AccountLogin Root Component
import { AccountLoginComponent } from './account-login/account-login.component';

const routes: Routes = [{
  path: 'account/login',
  component: AccountLoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
