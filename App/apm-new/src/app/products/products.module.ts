import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrencyCustomPipe } from './pipes/currency.pipe';
import { ProductCodeCustomPipe } from './pipes/product-code.pipe';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductsRoutes } from './products.routing';
import { StarModule } from 'src/shared/star/star.module';
import { ProductListRouteResolverModule } from './services/product-list.service.module';

@NgModule({
  declarations: [
    ProductListComponent,
    CurrencyCustomPipe,
    ProductCodeCustomPipe,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    ProductsRoutes,
    ProductListRouteResolverModule,
  ],
  exports: [FormsModule, CurrencyCustomPipe, ProductCodeCustomPipe, StarModule],
})
export class ProductsModule {}
