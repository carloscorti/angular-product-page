import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ErrorInterceptorProvider } from '../services/httpErrorImterceptor.service';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutes],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
