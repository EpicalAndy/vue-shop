import { defineStore } from "pinia";
import axios from "axios";

import type { Categories_model } from "@/models/categories_model";

const instance = axios.create();
export const useCategories = defineStore('useCategories', {
  state: () => ({
    categories: [] as Categories_model[],
    selectedCategories: [] as number[]
  }),
  getters: {

  },
  actions: {
    async getCategories() {
      const categories = await instance.get('src/demo/categories_demo.json');

      this.categories  = categories?.data || [];
    },
    setSelectedCategories(ids: Array<number & void>) {
      this.selectedCategories = ids;
    }
  }
})
