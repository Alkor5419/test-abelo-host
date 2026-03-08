export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductsState {
  products: Product[];
  isLoading: boolean;

  fetchProducts: () => Promise<ProductResponse>;
}
