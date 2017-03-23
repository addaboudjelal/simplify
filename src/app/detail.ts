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
  job: any;
  constructor(private route: ActivatedRoute, private location: Location, private jobService: JobsService) {
    console.log('this Job:', this.job);
  }

  ngOnInit(): void {
    console.log(this.route.params);
    const id = this.route.params.map( p => p.id);
    const url = this.route.url.map( p => p.join(''));
    console.log('This: ',id);
    console.log('And : ',url['destination']._value[1].path);
  }
  goBack(): void {
    this.location.back();
  }
}
