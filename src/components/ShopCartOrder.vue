<template>
  <v-container>
    <v-card>
      <v-card-title class="text-center">Заказ</v-card-title>
      <v-table>
        <thead>
        <tr>
          <th>Название</th>
          <th>Количество</th>
          <th>Общая цена</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in cart.products"
            :key="product.product.id">
        </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import ShopProductCard from "@/components/ShopProductCard.vue";
import type { Product_model } from "@/models/product_model";
import { useCart } from "@/stores/cart";
import ShopProductList from "@/components/ShopProductList.vue";

const cart = useCart();


</script>

<style scoped>

</style>
