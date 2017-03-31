import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./pages/hello.html')
})
export class HelloComponent {
  public hello: string;
  public evitTitle = '<h1>Test</h1>'
  // public text: string = '';
  private dataBase: any;
  public options:any = {maxLines: 1000, printMargin: false};
  constructor() {
    this.hello = 'Hello World!';
  }
}
