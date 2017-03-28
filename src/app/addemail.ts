import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {trigger, state, style, animate,transition} from '@angular/animations';
import { FormGroup, FormBuilder} from '@angular/forms';
import {JobsService} from './jobs.service';

@Component({
  selector: 'add-email',
  template: require('./addemail.html')
})

export class AddEmail implements OnInit {
  registerForm: FormGroup;
  @Input() master:string;
  @Output() hideAddEmail = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder, private db: JobsService) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      code: '',
      name: ''
    });
  }
  addJob({ value, valid }: {value: any, valid: boolean}) {
    console.log('Click:', value,valid);
    // if(value.code !== ''){
    //   this.db.addJobs({id: 10, code: value.code, title: value.name, emails: []});
    //   this.ngOnInit();
    // }
  }
  addSubEmail(): void {
    console.log('adding Email to db');
    this.hideAddEmail.emit(null);
  }
}
