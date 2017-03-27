import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {HelloComponent} from './hello';
import {Jobs} from './jobs';
import {Detail} from './detail';
import {JobsService} from './jobs.service';
import {ProjectForm} from './projectform';
import {ReactiveFormsModule} from '@angular/forms';

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
    ProjectForm
  ],
  providers: [JobsService],
  bootstrap: [RootComponent]
})
export class AppModule {}
