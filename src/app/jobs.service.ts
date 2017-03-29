import {Injectable} from '@angular/core';
// import {Headers, Http} from '@angular/http';
interface IJobs {
  'id': number;
  'code': string;
  'title': string;
  'emails': IJob[];
}

interface IJob {
  'code': string;
  'title': string;
  'comment': string;
  'version': string;
  'container': string;
}

let JOBSLIST = [
  {
    'id': 1,
    'code':  'XPTD012',
    'title': 'Ibrance Emails',
    'emails': [
      {
        'code': 'xpn320',
        'title': 'Woauw Emails',
        'comment': 'NO Comment',
        'version': '2',
        'container': 'emails Contain Elem'
      },
      {
        'code': 'xpn321',
        'title': 'Woauw Emails',
        'comment': 'NO Comment',
        'version': '1',
        'container': 'emails Contain Elem'
      },
      {
        'code': 'xpn322',
        'title': 'Woauw Emails',
        'comment': 'NO Comment',
        'version': '3',
        'container': 'emails Contain Elem'
      }
    ]
  },
  {
    'id': 2,
    'code':  'LOTD015',
    'title': 'Pfizer Emails',
    'emails': [
      {
        'code': 'xpn320',
        'title': 'Woauw Emails',
        'comment': 'NO Comment',
        'version': '2',
        'container': 'emails Contain Elem'
      },
      {
        'code': 'xpn321',
        'title': 'Woauw Emails',
        'comment': 'NO Comment',
        'version': '1',
        'container': 'emails Contain Elem'
      },
      {
        'code': 'xpn322',
        'title': 'Woauw Emails',
        'comment': 'NO Comment',
        'version': '3',
        'container': 'emails Contain Elem'
      }
    ]
  },
  {
    'id': 3,
    'code':  'MDR0066',
    'title': 'Shrmas Emails',
    'emails': [
      {
        'code': 'xpn320',
        'title': 'Woauw Emails',
        'comment': 'NO Comment',
        'version': '2',
        'container': 'emails Contain Elem'
      },
      {
        'code': 'xpn321',
        'title': 'Woauw Emails',
        'comment': 'NO Comment',
        'version': '1',
        'container': 'emails Contain Elem'
      },
      {
        'code': 'xpn322',
        'title': 'Woauw Emails',
        'comment': 'NO Comment',
        'version': '3',
        'container': 'emails Contain Elem'
      }
    ]
  },
];
@Injectable()
export class JobsService {
  // private headers = new Headers({'Content-Type': 'application/json'});
  constructor() {}

  getJobs(): any {
    return JOBSLIST;
  }
  getJob(codenum: String): any {
    return JOBSLIST.filter( elem => elem.code === codenum);
  }
  addJobs(obj: IJobs) {
    JOBSLIST.push(obj);
  }
  addJob(obj: IJob, version: string) {
    console.log('aDDing Job', obj, '|', version);
    // let tempo = this.getJob(version);
    // tempo.emails.push(obj);
    JOBSLIST.forEach(function(elem){
      if(elem.code === version){
        elem.emails.push(obj);
      }
    });
  }
}
