import {Component} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

let ARCHIVES = [
  {
    'date': '02/20/2017',
    'time': '09:45',
    'version': '0.20',
    'content': [],
    'preview': 'email001.html'
  },
  {
    'date': '02/20/2017',
    'time': '11:45',
    'version': '0.19',
    'content': [],
    'preview': 'email007.html'
  },
  {
    'date': '02/19/2017',
    'time': '02:45',
    'version': '0.17',
    'content': [],
    'preview': ''
  },
  {
    'date': '02/18/2017',
    'time': '09:45',
    'version': '0.1',
    'content': [],
    'preview': 'email001.html'
  }
];

@Component({
  selector: 'fountain-app',
  template: require('./pages/hello.html')
})
export class HelloComponent {
  public hello: string;
  public evitTitle = '<h1>Test</h1>';
  public archives: any;
  private url: SafeResourceUrl;
  private bool: boolean = true;
  constructor(private sanitizer: DomSanitizer) {
    this.hello = 'Hello World!';
    this.archives = this.getArchives();
    this.sendUrl('');
  }
  getArchives(): any {
    return ARCHIVES;
  }
  onSelect(data: any): void {
    console.log('Archive: \n/', data);
    this.sendUrl(data.preview);

  }
  sendUrl(link: string): void {
    if (link === '' || link === null || link === undefined){
      link = 'error.html';
    }
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('./app/html/' + link);
  }
}
