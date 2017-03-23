import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./hello.html')
})
export class HelloComponent {
  public hello: string;
  private dataBase: any;
  constructor() {
    this.hello = 'Hello World!';
  }
}
