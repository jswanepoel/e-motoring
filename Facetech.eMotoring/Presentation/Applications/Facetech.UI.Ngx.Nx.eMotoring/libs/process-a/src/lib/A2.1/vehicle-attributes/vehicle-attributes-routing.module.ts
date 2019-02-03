import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleAttributesComponent } from './vehicle-attributes.component';
import { AuthGuard } from '@facetech/common-ui';

const routes: Routes = [
  {
    path: 'vehicle-attributes',
    component: VehicleAttributesComponent,
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
export class VehicleAttributesRoutingModule { }
