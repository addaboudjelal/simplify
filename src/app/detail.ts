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
  constructor(private route: ActivatedRoute, private location: Location, private jobService: JobsService) {}
  ngOnInit(): void {
    console.log(this.route.params);
    let tempo = this.route.params;
    console.log(tempo);
  }
  goBack(): void {
    this.location.back();
  }
}
