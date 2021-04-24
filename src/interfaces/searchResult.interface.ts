import { Category } from './category.interface';

export interface SearchResult {
  categories: Category[];
  items: Item[];
}

export interface Item {
  id: string;
  seller_id: string | number;
  author: {
    name: string;
    lastname: string;
  };
  title: string;
  price: {
    currency: string;
    amount: string;
    decimals: string;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  address: {
    state: string;
  };
}
