import { RouterModule } from '@angular/router';
import {
  NgModule,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader
} from '@angular/core';

import { DynamicContentOutletErrorComponent } from './dynamic-content-outlet-error/dynamic-content-outlet-error.component';
import { DynamicContentOutletComponent } from './dynamic-content-outlet.component';
import { DynamicContentOutletGuard } from './dynamic-content-outlet.guard';
import { DynamicContentOutletMappings } from './dynamic-content-outlet.mappings';

@NgModule({
  imports: [
    RouterModule.forChild(DynamicContentOutletMappings)
  ],
  exports: [
    DynamicContentOutletComponent,
    DynamicContentOutletErrorComponent
  ],
  entryComponents: [
    DynamicContentOutletComponent,
    DynamicContentOutletErrorComponent
  ],
  declarations: [
    DynamicContentOutletComponent,
    DynamicContentOutletErrorComponent
  ],
  providers: [
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader
    },
    DynamicContentOutletGuard
  ]
})
export class DynamicContentOutletModule {
}
