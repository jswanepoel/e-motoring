import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule, ButtonModule, PanelModule, SelectButtonModule, PickListModule } from 'primeng/primeng';
import { PicklistTableComponent } from './picklist-table.component';
import { TestPicklistTableComponent } from './test-picklist-table/test-picklist-table.component';

@NgModule({
 imports: [
   CommonModule,
   FormsModule,
   ButtonModule,
   PanelModule,
   PickListModule,
   SelectButtonModule,
   ToggleButtonModule
  ],
  declarations: [
    PicklistTableComponent,
    TestPicklistTableComponent
  ],
  exports: [
    PicklistTableComponent,
    TestPicklistTableComponent
  ]
})
export class PicklistTableModule {
}
