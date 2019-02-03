import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectAttendeesComponent } from './select-attendees.component';
import { AuthGuard } from '@facetech/common-ui';

const routes: Routes = [
  {
    path: 'select-attendees',
    component: SelectAttendeesComponent,
    canActivate: [
      AuthGuard
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SelectAttendeesRoutingModule { }
