import { Renderer2 } from '@angular/core';
import { BorderColorDirective } from './border-color.directive';

let elRef = {
  nativeElement: document.createElement('div'),
};
let renderer2: Renderer2;

describe('BorderColorDirective', () => {
  it('should create an instance', () => {
    const directive = new BorderColorDirective(elRef, renderer2);
    expect(directive).toBeTruthy();
  });
});
