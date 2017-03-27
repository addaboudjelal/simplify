import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import {JobsService} from './jobs.service';
import {IJobs} from './IJobs.interface';

@Component({
  selector: 'create-project',
  template: require('./projectform.html')
})

export class ProjectForm implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private db:JobsService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      code: '',
      name: ''
    });
  }

  addJob({ value, valid}: {value:any, valid:boolean}) {
    console.log('Click:', value,valid);
    this.db.addJobs({id: 10, code: value.code, title: value.name, emails: []});
    this.ngOnInit();
  }
  clearField() {
    this.ngOnInit();
  }
}
