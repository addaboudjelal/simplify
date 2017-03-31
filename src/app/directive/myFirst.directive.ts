import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[myFirst]'
})

export class myFirstDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseover') onMouseOver() {
    console.log('mouseOver');
  }
  @HostListener('mouseout') onMouseOut() {
    console.log('mouseOut');
  }
}
