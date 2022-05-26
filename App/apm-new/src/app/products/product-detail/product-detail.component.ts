import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../product-list.component.types';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle = 'Product Detail:';
  product: IProduct | undefined;
  productId!: number;
  productServiceSubscription!: Subscription;
  needErrorMessage: boolean = false;

  constructor(private acivatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.productServiceSubscription = this.acivatedRoute.data.subscribe({
      next: (productData) => {
        this.product = productData['product'];
        this.pageTitle = this.product
          ? `${this.pageTitle} ${this.product.productName}`
          : `${this.pageTitle} not found`;
      },
      error: (error) => {
        console.warn('ProductDetailComponent error: ', error);
        this.needErrorMessage = true;
      },
    });
  }

  ngOnDestroy(): void {
    this.productServiceSubscription.unsubscribe();
  }

  onClickBack(): void {
    this.router.navigate(['products']);
  }
}
