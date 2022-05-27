import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyCustomPipe } from './pipes/currency.pipe';
import { ProductCodeCustomPipe } from './pipes/product-code.pipe';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductsRoutes } from './products.routing';
import { ProductListRouteResolverModule } from './services/product-list.service.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    CurrencyCustomPipe,
    ProductCodeCustomPipe,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutes,
    ProductListRouteResolverModule,
    SharedModule,
  ],
  exports: [CurrencyCustomPipe, ProductCodeCustomPipe],
})
export class ProductsModule {}
