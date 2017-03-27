import {Component} from '@angular/core';
import {JobsService} from './jobs.service';
import {Router} from '@angular/router';

@Component({
  selector: 'fountain-jobs',
  template: require('./jobs.html')
})

export class Jobs {
  public name: string;
  public jobList: any;
  public user: any;

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
  addJob(hero: any): void {
    console.log('From:', hero);
  }
  onSelect(info: any): void {
    // console.log(info);
    this.router.navigate(['/detail', info.code]);
  }
}
