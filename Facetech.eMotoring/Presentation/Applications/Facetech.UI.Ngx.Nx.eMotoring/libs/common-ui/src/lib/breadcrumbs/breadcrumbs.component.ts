import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'ngx-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  @Input() menuItems: MenuItem[];
  @Input() isActive: boolean = false;

  public constructor() {
  }
}
