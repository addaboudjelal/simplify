import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {JobsService} from './jobs.service';

@Component ({
  selector: 'my-detail',
  template: require('./detail.html')
})
export class Detail implements OnInit {
  public jobcode: any;
  constructor(private route: ActivatedRoute, private location: Location, private jobService: JobsService) {
    this.getList();
    // console.log('J',this.jobcode);

  }

  ngOnInit(): void {
    this.getList();
  }
  getList(): void {
    // console.log(this.route.params);
    const id = this.route.params.map( p => p.id);
    const url = this.route.url.map( p => p.join(''));
    // console.log('And : ',url['destination']._value[1].path);
    let tempo = url['destination']._value[1].path;
    this.jobcode = this.jobService.getJob(tempo)[0];
    // console.log('D',this.jobcode);
  }
  goBack(): void {
    this.location.back();
  }
  addEmail(): void {
    console.log('adding');
  }
}
