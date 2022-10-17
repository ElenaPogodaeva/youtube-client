import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import type { AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements AfterViewInit {
  @Input('appBorderColor') publishedDate: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const now = Date.now();
    const date = Date.parse(this.publishedDate);
    const days = (now - date) / 1000 / 3600 / 24;
    let color;

    switch (true) {
      case days < 7:
        color = 'blue';
        break;
      case days < 31:
        color = 'green';
        break;
      case days < 181:
        color = 'yellow';
        break;
      default:
        color = 'red';
        break;
    }

    this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom-color', color);
  }
}
