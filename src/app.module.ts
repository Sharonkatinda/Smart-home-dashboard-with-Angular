import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { Security } from './components/security/security';
import { Temperature } from './components/temperature/temperature';
import { Smoke } from './components/smoke/smoke';
import { Dashboard } from './components/dashboard/dashboard';

@NgModule({
  declarations: [
    AppComponent,
    Security,
    Temperature,
    Smoke,
    Dashboard
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
