import { Component } from '@angular/core';
import { SHOW_IMAGE_TEXT } from "./product-list.component.constants";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  // styleUrls: ['./app.component.css']
})

export class ProductListComponent {
  productListHeader: string = 'Product List';
  productImageWidth: number = 50;
  productImageMargin: number = 2;
  showImage: boolean = false;
  showImageButtonText: string = SHOW_IMAGE_TEXT.visible;
  filterInputText: string = "cart";
  products: any[] = [
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

  toggleImageView(): void {
    this.setShowImageButtonText();
    this.showImage = !this.showImage;
  }

  setShowImageButtonText(): void {
    this.showImageButtonText = this.showImage ? SHOW_IMAGE_TEXT.visible : SHOW_IMAGE_TEXT.hidden;
  }
}
