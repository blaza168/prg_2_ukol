import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FrontEndComponent } from './components/front-end/front-end.component';
import { StructureComponent } from './components/structure/structure.component';
import { NextBtnComponent } from './components/next-btn/next-btn.component';
import { BackendComponent } from './components/backend/backend.component';
import { SummaryComponent } from './components/summary/summary.component';
import { EndComponent } from './components/end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FrontEndComponent,
    StructureComponent,
    NextBtnComponent,
    BackendComponent,
    SummaryComponent,
    EndComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
