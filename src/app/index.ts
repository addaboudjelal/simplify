import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {HelloComponent} from './hello';
import {Jobs} from './jobs';
import {Detail} from './detail';
import {JobsService} from './service/jobs.service';
import {ProjectForm} from './projectform';
import {ReactiveFormsModule} from '@angular/forms';
import {AddEmail} from './addemail';
import {AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    AceEditorModule
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
