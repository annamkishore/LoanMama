import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoanModule } from '../loan/loan.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
