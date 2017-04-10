import {Component} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {TemplateEmail} from './service/template.service';

let ARCHIVES = [
  {
    'date': '02/20/2017',
    'time': '09:45',
    'version': '0.20',
    'content': [],
    'preview': 'email001.html',
    'edit': ''
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

let COMPOSANT = [
  {
    'name': 'template1',
    'link': 'template1.html'
  },
  {
    'name': 'template2',
    'link': 'template2.html'
  },
  {
    'name': 'template3',
    'link': 'template3.html'
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
  public composants: any;
  public simpleDrop: any = null;
  private url: SafeResourceUrl;

  private bool: boolean = true;
  private walou: string;

  private receivedData: Array<any> = [];
  private completeEmail: any;

  constructor(private sanitizer: DomSanitizer, private emailStructure: TemplateEmail) {
    this.hello = 'Hello World!';
    this.archives = this.getArchives();
    this.composants = this.getComposant();
    this.sendUrl('');

  }
  transferDataSuccess($event: any) {
    this.receivedData.push($event.dragData);
    this.emailStructure.distructure($event.dragData);
    this.completeEmail = this.emailStructure.structure();

  }
  getArchives(): any {
    return ARCHIVES;
  }
  getComposant(): any {
    return COMPOSANT;
  }
  onSelect(data: any): void {
    console.log('Archive: \n/', data);
    this.sendUrl(data.preview);
    //this.walou = data.edit;

  }
  sendUrl(link: string): void {
    if (link === '' || link === null || link === undefined){
      link = 'error.html';
    }
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('./app/html/' + link);
  }
  testClick(): void {
    console.log('ouuupps');
  }
}
