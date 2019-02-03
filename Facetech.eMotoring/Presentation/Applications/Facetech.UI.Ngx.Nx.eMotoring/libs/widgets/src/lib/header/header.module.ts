import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverlayPanelModule } from 'primeng/primeng';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    OverlayPanelModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
