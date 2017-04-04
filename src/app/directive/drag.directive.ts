import {Directive, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[Drag]'
})

export class Drag {
  @Input('Drag') data: any;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    let el = this.el.nativeElement;
    el.draggable = true;

    el.addEventListener('dragstart', (e) => {
      console.log('Drag start');
      // el.dataTransfer.effectAllowed = 'move';
      // e.dataTransfer.setData('text/plain',e.target.id);
    });
    el.addEventListener('dragend', (e) => { console.log('Drag End');});
  }
}
