import {Injectable} from '@angular/core';
import {IJobs, IJob} from '../interface/ijobs.interface';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

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

  constructor(private http: Http) {
    console.log('JSON FILE: \n', this.getJson());
  }

  getJson() {
    return this.http.get('./app/json/db.json').map((res: Response) => res.json().data);
  }

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
    JOBSLIST.forEach(function (elem: IJobs) {
      if (elem.code === version) {
        elem.emails.push(obj);
      }
    });
  }
}
