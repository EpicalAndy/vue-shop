import { defineStore } from "pinia";
import type { Product_model } from "@/models/product_model";
import type { Cart_model } from "@/models/cart_model";
import { useProducts } from "@/stores/products";

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
    },
    productsList: (state) => {
      return  state.products.map(product => product.product);
    }
  },
  actions: {
    addProduct(productId: number) {
      const allProducts = useProducts();
      const currentProduct = allProducts.getProduct(productId);

      let productInCart = this.getProductInCart(productId);

      if (productInCart) {
        productInCart.count++;

        return;
      }

      currentProduct && this.products.push({
        productId: productId,
        product: currentProduct,
        count: 1
      });
    },
    getProductInCart(productId: number) {
      return this.products.find(product => product.productId === productId) || null;
    },
    isProductInCart(productId: number) {
      return !!this.getProductInCart(productId);
    }
  }
})
