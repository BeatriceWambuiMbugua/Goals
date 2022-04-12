import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]',
})
export class StrikethroughDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click') onClicks() {
    this.textDeco('line-through');
  }
  @HostListener('dblclick') onDoubleClick() {
    this.textDeco('None');
  }
  private textDeco(action: string) {
    this.elementRef.nativeElement.style.textDecoration = action;
  }
}
