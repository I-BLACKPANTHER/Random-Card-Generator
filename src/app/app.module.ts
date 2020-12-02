import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//http

import { HttpClientModule } from '@angular/common/http';

// for toast

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// font Awesome

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {
  faCalendar,
  faDatabase,
  faEnvelope,
  faMapMarked,
  faMapMarkedAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    library.add(faEnvelope, faPhone, faDatabase, faMapMarkedAlt, faCalendar);
  }
}
