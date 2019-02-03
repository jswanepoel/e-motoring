import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ContextMenuModule } from 'primeng/primeng';

import { ImageMapAreaComponent } from './image-map-area.component';

@NgModule({
  imports: [
    ContextMenuModule,
    PanelMenuModule
  ],
  exports: [
    ImageMapAreaComponent
  ],
  declarations: [
    ImageMapAreaComponent
  ]
})
export class ImageMapAreaModule {
}
