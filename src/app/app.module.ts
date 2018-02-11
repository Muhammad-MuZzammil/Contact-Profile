import { AppRoutingModule } from './app-routing.module';
import { ConnectedModule } from './components/connected/connected.module';
import { CapturedModule } from './components/captured/captured.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './components/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsModule } from './components/contacts/contacts.module';
import { PipelineModule } from './components/pipeline/pipeline.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactsModule,
    HomeModule,
    PipelineModule,
    CapturedModule,
    ConnectedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
