import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ErrorInterceptorProvider } from '../services/httpErrorImterceptor.service';

import { CurrencyCustomPipe } from './pipes/currency.pipe';
import { ProductCodeCustomPipe } from './pipes/product-code.pipe';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from '../shared/star/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListRouteResolver } from './products/services/porduct-list.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    StarComponent,
    CurrencyCustomPipe,
    ProductCodeCustomPipe,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        resolve: {
          product: ProductListRouteResolver,
        },
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: '**', pathMatch: 'full', redirectTo: 'welcome' },
    ]),
  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
