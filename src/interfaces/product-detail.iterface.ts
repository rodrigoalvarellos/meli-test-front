import { Category } from "./category.interface";

export interface ProductDetailItem {
  author: {
    name: string;
    lastname: string;
  };
  categories: Category[],
  item: {
    id: string;
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
  };
}


