import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@atmCore/core.module';
import { SharedModule } from '@atmShared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule.forRoot(), SharedModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
