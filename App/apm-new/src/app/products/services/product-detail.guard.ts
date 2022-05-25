import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductService } from 'src/services/data.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailGuard implements CanActivate {
  constructor(private productService: ProductService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.productService.getProducts().pipe(
      map((productData) => {
        let returnState = true;
        const products = productData.map((product) => product.productId);
        if (!products.includes(Number(route.paramMap.get('id')))) {
          alert('this product is not on products list');
          this.router.navigate(['products']);
          returnState = false;
        }
        console.log('returnState from ProductDetailGuard', returnState);
        return returnState;
      }),
      catchError((error) => {
        console.warn('ProductDetailGuard error: ', error);
        this.router.navigate(['welcone']);
        return of(false);
      })
    );
  }
}
