import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-content-outlet-error-component',
  template: `
    <div>{{ errorMessage }}</div>
  `
})
export class DynamicContentOutletErrorComponent {
  @Input() errorMessage: string;

  public constructor() {
  }
}
