import { Directive, ElementRef, Input, OnChanges, OnDestroy, Optional } from '@angular/core';

@Directive({
  selector: '[elementFocus]',
})
export class FocusDirective implements OnChanges, OnDestroy {
  @Input() elementFocus: boolean = false;
  @Input() focusDelay: number = 0;

  public constructor(
    private elementRef: ElementRef) {
  }

  public ngOnChanges() {
    this.checkFocus();
  }

  public ngOnDestroy(): void {
  }

  private checkFocus() {
    if (this.elementFocus && document.activeElement !== this.elementRef.nativeElement) {
      let checkFocusTimeoutHandle: number;
      const focus = () => {
        this.elementRef.nativeElement.focus();
      };

      // Even without a delay, we wait for the next JavaScript tick
      // to avoid causing changes on parent components (e.g., the
      // TextInput component) that have already been checked on this
      // change detection cycle.
      checkFocusTimeoutHandle = setTimeout(focus, this.focusDelay) as any;
    }
  }
}
