import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(currentElementRef: ElementRef) {
    currentElementRef.nativeElement.style.color = 'blue';
  }

}
