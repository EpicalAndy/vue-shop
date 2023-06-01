<template>
  <v-layout>
    <v-main>
      <v-container fluid>
        <v-row dense>
          <v-col
              v-for="n in 8"
              :key="n"
              cols="3"
          >
            <shop-product-card></shop-product-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>


</template>

<script setup lang="ts">
import ShopProductCard from "@/components/ShopProductCard.vue";
import { useProducts } from "@/stores/products";
import type { Product_model } from "@/models/product_model";
const products: Product_model[] = useProducts();

async function getProducts() {
  await products.getProducts();
}

getProducts();
</script>

<style scoped>

</style>

