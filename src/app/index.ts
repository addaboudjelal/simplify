import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {HelloComponent} from './hello';
import {Jobs} from './jobs';
import {Detail} from './detail';
import {JobsService} from './jobs.service';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    HelloComponent,
    Jobs,
    Detail
  ],
  providers: [JobsService],
  bootstrap: [RootComponent]
})
export class AppModule {}
