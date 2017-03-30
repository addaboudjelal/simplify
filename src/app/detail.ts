import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {JobsService} from './service/jobs.service';

@Component ({
  selector: 'my-detail',
  template: require('./pages/detail.html')
})
export class Detail implements OnInit {
  public jobcode: any;
  public master: string = 'Parent to child';
  public visible: boolean = false;
  constructor(private route: ActivatedRoute, private location: Location, private jobService: JobsService) {
    this.getList();
  }
  ngOnInit(): void {
    this.getList();
  }
  getList(): void {
    // console.log(this.route.params);
    const id = this.route.params.map( p => p.id);
    const url = this.route.url.map( p => p.join(''));
    // console.log('And : ',url['destination']._value[1].path);
    let tempo: string = url['destination']._value[1].path;
    this.jobcode = this.jobService.getJob(tempo)[0];
    // console.log('D',this.jobcode);
    this.master = tempo;
  }
  goBack(): void {
    this.location.back();
  }
  addEmail(): void {
    // console.log('Parent adding');
    this.visible = !this.visible;
  }
  onCode(data: string): void {
    console.log('open: ', data);
  }
}
