import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';
//import { AuthComponent } from './auth/auth.component';
//import { LoginComponent } from './auth/login/login.component';
import { AppBaseModule } from './app-base';

@NgModule({
  imports: [
    CommonModule,
    AppBaseModule
  ]
})
export class DomainModule {
}
