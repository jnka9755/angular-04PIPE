import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component'

import { SharedModule } from './shared/shared.module';
import { PipesComponentModule } from './pipes-component/pipes-component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    PipesComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
