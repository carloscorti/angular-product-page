interface IShowImageTextConstants {
  visible: string;
  hidden: string;
}

interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
}

export { IShowImageTextConstants, IProduct };
