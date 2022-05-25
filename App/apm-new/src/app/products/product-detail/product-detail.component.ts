import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/services/data.service';
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

  constructor(
    private acivatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.acivatedRoute.snapshot.paramMap.get('id'));
    this.productServiceSubscription = this.productService
      .getProductById(this.productId)
      .subscribe({
        next: (productData) => {
          this.product = productData;
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
