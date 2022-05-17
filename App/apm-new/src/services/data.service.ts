import { Injectable } from '@angular/core';
import { IProduct } from '../app/products/product-list.component.types';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';

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
        console.warn('ProductService error: ', error);
        throw error;
      })
    );
  }
}
