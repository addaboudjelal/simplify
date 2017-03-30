import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { FormGroup, FormBuilder} from '@angular/forms';
import {JobsService} from './service/jobs.service';

@Component({
  selector: 'add-email',
  template: require('./pages/addemail.html')
})

export class AddEmail implements OnInit {
  registerForm: FormGroup;
  @Input() master: string;
  @Output() hideAddEmail = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder, private db: JobsService) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      code: '',
      name: ''
    });
  }
  addJob({ value, valid }: {value: any, valid: boolean}) {
    console.log ('Click:', value, valid);
    if (value.code !== '') {
      this.db.addJob({code: value.code.toUpperCase(), title: value.name, comment: 'this comment', version: '12', container: 'lalalala'}, this.master);
      this.ngOnInit();
      this.hideAddEmail.emit(null);
    }
  }
  addSubEmail(): void {
    console.log('adding Email to db');
    this.ngOnInit();
    this.hideAddEmail.emit(null);
  }
}
