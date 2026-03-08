import apiClient from "@/services/api-client";
import { Product, ProductResponse, ProductsState } from "@/types/products.types";
import { create } from "zustand";

export const useProductsStore = create<ProductsState>()((set, get) => ({
  products: [],
  isLoading: false,

  fetchProducts: async () => {
    set({ isLoading: true });
    const response = await apiClient.get<ProductResponse>("/products?limit=12");
    set({
      products: response.data.products,
      isLoading: false,
    });
    return response.data;
  },
}));
