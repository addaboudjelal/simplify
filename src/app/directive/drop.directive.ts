import {Directive,ElementRef, Output, OnInit, EventEmitter} from '@angular/core';

@Directive({
  selector: '[Drop]'
})
export class Drop implements OnInit {
  @Output() dropped: EventEmitter<any> = new EventEmitter();
  constructor(private el: ElementRef){}
  ngOnInit() {
    let el = this.el.nativeElement;

    el.addEventListener('dragenter', (e) => {
      console.log('Drag object detected');
      console.log(e.dataTransfer.getData('text'));
    });

    el.addEventListener('drop', (e) => {
      console.log('Droped');
      // if(e.stopPropagation){
      //   e.stopPropagation();
      // }
    });
  }
}
