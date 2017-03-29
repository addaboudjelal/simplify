import {Component} from '@angular/core';
import {JobsService} from './service/jobs.service';
import {Router} from '@angular/router';
import {IJobs} from './interface/ijobs.interface';

@Component({
  selector: 'fountain-jobs',
  template: require('./pages/jobs.html')
})

export class Jobs {
  public name: string;
  public jobList: any;
  public user: IJobs;

  constructor(private db: JobsService, private router: Router) {
    this.name = 'Jobs List';
    this.jobList = this.getJobs();
  }
  getJobs(): void {
    return this.db.getJobs();
  }
  getJob(num: String): void {
    return this.db.getJob(num);
  }
  onSelect(info: any): void {
    // console.log(info);
    this.router.navigate(['/detail', info.code]);
  }
}
