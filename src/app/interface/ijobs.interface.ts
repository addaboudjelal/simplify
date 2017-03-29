export interface IJob {
  'code': string;
  'title': string;
  'comment': string;
  'version': string;
  'container': string;
}
export interface IJobs {
  'id': number;
  'code': string;
  'title': string;
  'emails': IJob[];
}
