import { defineStore } from "pinia";
import type { Product_model } from "@/models/product_model";
import type { Cart_model } from "@/models/cart_model";

export const useCart = defineStore('cart', {
  state: () => ({
    products: [] as Cart_model[]
  }),
  getters: {
    allProductsCount: (state) => {
      const products = state.products;

      let count = 0;

      products.forEach((product) => {
        count += product.count;
      });

      return count;
    }
  }
})
