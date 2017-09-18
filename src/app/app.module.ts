import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Router} from '@angular/router';

import { routing } from './app.routing';

import { AppComponent } from './app.component';

import { C4Pagination } from './c4ng-components/c4pagination/c4pagination';
import { HomeComponent } from './demo/components/home/home.component';
import { PaginationComponent } from './demo/components/pagination/pagination.component';

@NgModule({
  declarations: [
    C4Pagination,
    AppComponent,
    HomeComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
