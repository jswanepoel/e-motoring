import {
  AfterViewInit,
  Component,
  ComponentRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { DynamicContentOutletService } from './dynamic-content-outlet.service';

@Component({
  selector: 'ngx-dynamic-content-outlet',
  template: `
    <ng-container #container></ng-container>
  `
})
export class DynamicContentOutletComponent implements AfterViewInit, OnDestroy {
  @Input() componentName: string;
  @ViewChild('container', {
    read: ViewContainerRef
  }) container: ViewContainerRef;
  private component: ComponentRef<{}>;

  public constructor(
    private dynamicContentService: DynamicContentOutletService) {
  }

  public async ngAfterViewInit() {
    this.component = await this.dynamicContentService.getComponent(this.componentName);
    this.container.insert(this.component.hostView);
  }

  public ngOnDestroy() {
    if (this.component) {
      this.component.destroy();
      this.component = null;
    }
  }
}
