import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C2Component } from './c2/c2.component';
import { MathildeC3Component } from './mathilde-c3/mathilde-c3.component';


@NgModule({
  declarations: [
    AppComponent,
    C2Component,
    MathildeC3Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
