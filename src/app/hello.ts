import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./pages/hello.html')
})
export class HelloComponent {
  public hello: string;
  private dataBase: any;
  constructor() {
    this.hello = 'Hello World!';
  }
}
