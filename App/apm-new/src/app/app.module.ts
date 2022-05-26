import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { StarModule } from '../shared/star/star.module';
import { WelcomeModule } from './welcome/welcome.module';

import { ErrorInterceptorProvider } from '../services/httpErrorImterceptor.service';

import { CurrencyCustomPipe } from './pipes/currency.pipe';
import { ProductCodeCustomPipe } from './pipes/product-code.pipe';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListRouteResolver } from './products/services/porduct-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CurrencyCustomPipe,
    ProductCodeCustomPipe,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StarModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        resolve: {
          product: ProductListRouteResolver,
        },
      },
      { path: '', pathMatch: 'full', redirectTo: 'welcome' },
      { path: '**', pathMatch: 'full', redirectTo: 'welcome' },
    ]),
    WelcomeModule,
  ],
  providers: [ErrorInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
