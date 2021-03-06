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
  template: require('./pages/hello.html'),
  styleUrls: ['./app/css/email.css']
})
export class HelloComponent {

  public archives: any;
  public composants: any;
  public simpleDrop: any = null;
  private url: SafeResourceUrl;

  private text:string = "";

  private receivedData: Array<any> = [];
  private completeEmail: any;

  constructor(private sanitizer: DomSanitizer, private emailStructure: TemplateEmail) {

    this.archives = this.getArchives();
    this.composants = this.getComposant();
    this.sendUrl('');


  }
  transferDataSuccess($event: any) {
    this.receivedData.push($event.dragData);
    this.emailStructure.distructure($event.dragData);
    this.completeEmail = this.emailStructure.structure();

    //this.aceContain(this.getFileContent($event.dragData));
    console.log("received template email",this.receivedData);
    this.receivedData.forEach(e => {this.text += this.getFileContent(e)});
  }
  // aceContain(text: String): void{
  //   //this.text += text;
  // }
  // aceTextContain(arr: Array<String> = []): String{
  //   if( arr.length <= 1){
  //     return this.getFileContent(arr[0]);
  //   }
  //   return `${this.getFileContent(arr[0])}  ${this.aceTextContain(arr.slice(0))}` ;
  // }
  getFileContent(file: String): String{
    var rawFile = new XMLHttpRequest();
    var link = './app/template/'+file;
    var allText = '';
    rawFile.open("GET", link, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return (allText);
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
