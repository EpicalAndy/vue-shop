<template>
  <v-main>
    <v-container fluid>
      <v-row dense>
        <shop-product-card v-for="product in products.products"
                           :key="product.id"
                           :product="product"
        >

        </shop-product-card>
      </v-row>
    </v-container>
  </v-main>


</template>

<script setup lang="ts">
import ShopProductCard from "@/components/ShopProductCard.vue";
import { useProducts } from "@/stores/products";
import type { Product_model } from "@/models/product_model";

const products = useProducts();

function getProducts() {
  products.getProducts();
}

getProducts();

</script>

<style scoped>

</style>

