import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {HelloComponent} from './hello';
import {Jobs} from './jobs';
import {Detail} from './detail';
import {JobsService} from './service/jobs.service';
import {ProjectForm} from './projectform';
import {ReactiveFormsModule} from '@angular/forms';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {AddEmail} from './addemail';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule
  ],
  declarations: [
    RootComponent,
    HelloComponent,
    Jobs,
    Detail,
    ProjectForm,
    AddEmail
  ],
  providers: [JobsService],
  bootstrap: [RootComponent]
})
export class AppModule {}
