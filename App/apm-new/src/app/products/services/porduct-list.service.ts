import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductService } from 'src/services/data.service';
import { IProduct } from '../product-list.component.types';

@Injectable({ providedIn: 'root' })
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
