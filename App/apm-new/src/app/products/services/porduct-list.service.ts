import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductService } from 'src/services/data.service';
import { IProduct } from '../product-list.component.types';
import { ProductListRouteResolverModule } from './product-list.service.module';

// @Injectable({ providedIn: 'root' })
// is enough for the %98 of the cases,
// even is { providedIn: 'root' }, angular tree shake it
// an includes hte service on the bundle for the module that uses it
// check:
// https://stackoverflow.com/questions/51097327/angular-6-providedin-doesnt-work-staticinjectorerror
// https://www.youtube.com/watch?v=jigR_jBhDMs

// in this case just, to try it out,
// i { providedIn: ProductListRouteResolverModule }
// the only differential stuff you get is:
// you cannot inject this service outside this module
@Injectable({ providedIn: ProductListRouteResolverModule })
export class ProductListRouteResolver implements Resolve<IProduct | undefined> {
  constructor(private productService: ProductService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IProduct | undefined> {
    return this.productService
      .getProductById(Number(route.paramMap.get('id')))
      .pipe(
        map((product) => {
          if (product) return product;
          alert('this product is not on products list');
          this.router.navigate(['products']);
          return undefined;
        }),
        catchError((error) => {
          console.warn('ProductDetailGuard error: ', error);
          console.log('redirecting to welcome page');
          this.router.navigate(['welcone']);
          return of(undefined);
        })
      );
  }
}
