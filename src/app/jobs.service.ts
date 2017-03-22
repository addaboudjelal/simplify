import {Injectable} from '@angular/core';
// import {Headers, Http} from '@angular/http';

let JOBS = [
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
    return JOBS;
  }
  getJob(num: any): any {
    return JOBS.filter( elem => elem.id === num);
  }
}
