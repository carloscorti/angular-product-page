import { Injectable } from '@angular/core';
import { IProduct } from '../app/products/product-list.component.types';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = '../api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((productList) => {
        console.log('product list', productList);
      }),
      catchError((error) => {
        console.warn('ProductService getProducts error: ', error);
        throw error;
      })
    );
  }

  getProductById(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((productList) =>
        productList.find((product) => product.productId === id)
      ),
      catchError((error) => {
        console.warn('ProductService getProductById error: ', error);
        throw error;
      })
    );
  }
}
