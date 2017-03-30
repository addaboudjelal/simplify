import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello';
import {Jobs} from './jobs';
import {Detail} from './detail';

@Component({
  selector: 'fountain-root',
  template: require('./pages/index.html')
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: Jobs
  },
  {
    path: 'json',
    component: HelloComponent
  },
  {
    path: 'project/:id',
    component: Detail
  }
];

export const routing = RouterModule.forRoot(routes);
