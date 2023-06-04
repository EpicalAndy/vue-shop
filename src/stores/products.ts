import { defineStore } from "pinia";
import axios from "axios";
import type { Product_model } from "@/models/product_model";

const instance = axios.create();
export const useProducts = defineStore('products', {
  state: () => ({
    products: [] as Product_model[]
  }),
  actions: {
    async getProducts() {
      const products = await instance.get('src/demo/products_demo.json');

      this.products  = products?.data || [];
    },
    filterProducts(ids: Array<number>) {
      return ids.length ?  this.products.filter(item => {
        return ids.indexOf(item.id) > -1;
      }) : this.products;
    }
  }
})
