import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/data.service';
import { SHOW_IMAGE_TEXT } from './product-list.component.constants';
import { IProduct } from './product-list.component.types';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productListHeader: string = 'Product List';
  productImageWidth: number = 50;
  productImageMargin: number = 2;
  showImage: boolean = false;
  showImageButtonText: string = SHOW_IMAGE_TEXT.visible;
  filteredProducts: IProduct[] = [];
  private _filterInputText: string = '';
  get filterInputText(): string {
    console.log('get _filterInputText', this._filterInputText);
    return this._filterInputText;
  }
  set filterInputText(newFilterInputTextValue: string) {
    console.log('set _filterInputText: old value', this._filterInputText);
    console.log('set _filterInputText: new value', newFilterInputTextValue);
    this._filterInputText = newFilterInputTextValue;

    this.filteredProducts = this.getFilteredProductsBy(this._filterInputText);
  }
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    console.log('From ngOnInit: product-list.component intialized');
    this.productService.getProducts().subscribe({
      next: (productData) => {
        this.products = productData;
        this.filteredProducts = this.products;
      },
    });
  }

  toggleImageView(): void {
    this.setShowImageButtonText();
    this.showImage = !this.showImage;
  }

  setShowImageButtonText(): void {
    this.showImageButtonText = this.showImage
      ? SHOW_IMAGE_TEXT.visible
      : SHOW_IMAGE_TEXT.hidden;
  }

  getFilteredProductsBy(filterBy: string): IProduct[] {
    return this.products.filter(
      (item: IProduct): Boolean =>
        item.productName
          .toLocaleLowerCase()
          .includes(filterBy.toLocaleLowerCase())
    );
  }

  handleStarStatus(starStatus: string): void {
    console.log(starStatus);
  }

  handleUpdateRating(starRating: number): void {
    this.productListHeader = `Product List: product with ${starRating} rating clicked`;
    // console.log(starRating)
  }
}
