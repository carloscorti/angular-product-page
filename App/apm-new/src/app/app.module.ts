import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { WelcomeModule } from './welcome/welcome.module';

import { ErrorInterceptorProvider } from '../services/httpErrorImterceptor.service';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    WelcomeModule,
    ProductsModule,
    AppRoutes,
  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
