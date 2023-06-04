<template>
  <v-main>
    <v-container fluid>
      <v-row dense>
        <shop-product-card v-for="product in filtredProducts"
                           :key="product.id"
                           :product="product">
        </shop-product-card>
      </v-row>
    </v-container>
  </v-main>


</template>

<script setup lang="ts">
import ShopProductCard from "@/components/ShopProductCard.vue";
import { useProducts } from "@/stores/products";
import type { Product_model } from "@/models/product_model";
import { computed } from "vue";
import { useCategories } from "@/stores/categories";

const products = useProducts();
const categories = useCategories();
const filtredProducts = computed(() => {
  const selectedCategories = categories.selectedCategories;

  return selectedCategories.length ?
      products.products.filter(item => categories.selectedCategories.indexOf(item.category) >= 0):
      products.products;
});

function getProducts() {
  products.getProducts();
}

getProducts();

</script>

<style scoped>

</style>

