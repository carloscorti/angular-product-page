import { Component, OnInit } from '@angular/core';
import { SHOW_IMAGE_TEXT } from "./product-list.component.constants";
import { IProduct } from "./product-list.component.types";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  productListHeader: string = 'Product List';
  productImageWidth: number = 50;
  productImageMargin: number = 2;
  showImage: boolean = false;
  showImageButtonText: string = SHOW_IMAGE_TEXT.visible;
  filteredProducts: IProduct[] = []
  private _filterInputText: string = "";
  get filterInputText(): string {
    console.log("get _filterInputText", this._filterInputText)
    return this._filterInputText
  }
  set filterInputText(newFilterInputTextValue: string) {
    console.log("set _filterInputText: old value", this._filterInputText)
    console.log("set _filterInputText: new value", newFilterInputTextValue)
    this._filterInputText = newFilterInputTextValue

    this.filteredProducts = this.getFilteredProductsBy(this._filterInputText)
  }
  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
  ];

  ngOnInit() {
    console.log("From ngOnInit: product-list.component intialized")
    this.filteredProducts = this.products

  }

  toggleImageView(): void {
    this.setShowImageButtonText();
    this.showImage = !this.showImage;
  }

  setShowImageButtonText(): void {
    this.showImageButtonText = this.showImage ? SHOW_IMAGE_TEXT.visible : SHOW_IMAGE_TEXT.hidden;
  }

  getFilteredProductsBy(filterBy: string): IProduct[] {
    return this.products.filter((item: IProduct): Boolean => item.productName.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase()))
  }
}
