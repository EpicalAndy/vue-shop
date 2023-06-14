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
    },
    totalCost: (state): number => {
      const products = state.products;

      let cost = 0;

      if (!products.length) {
        return cost;
      }

      products.forEach(product => {
        cost += product.count * product.product.price;
      });

      return cost
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
    removeAllProducts() {
      this.products = [];
    },
    getProductInCart(productId: number) {
      return this.products.find(product => product.productId === productId) || null;
    },
    isProductInCart(productId: number) {
      return !!this.getProductInCart(productId);
    }
  }
})
