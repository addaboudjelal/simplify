import {IJob} from './IJob.interface';
export interface IJobs {
  'id': number;
  'code': string;
  'title': string;
  'emails': IJob[];
}
