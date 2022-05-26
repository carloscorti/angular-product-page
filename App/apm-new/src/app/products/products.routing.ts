import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductListRouteResolver } from './services/porduct-list.service';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    resolve: {
      product: ProductListRouteResolver,
    },
  },
];

export const ProductsRoutes = RouterModule.forChild(routes);
