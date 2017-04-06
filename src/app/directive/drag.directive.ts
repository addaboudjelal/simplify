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

    el.addEventListener('dragstart', (pEvt) => {
      console.log('Drag start');
      pEvt.dataTransfer.effectAllowed = 'move';
      pEvt.dataTransfer.setData('text/plain',pEvt.target.id);
      console.log(pEvt.dataTransfer);
    });
    el.addEventListener('dragend', (e) => { console.log('Drag End');});
  }
}
