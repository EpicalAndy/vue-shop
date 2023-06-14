<template>
  <v-card class="shop-cart-order">
    <v-toolbar>
      <v-toolbar-title>Заказ</v-toolbar-title>
    </v-toolbar>
      <v-card-text>Количество: {{ cart.allProductsCount }}</v-card-text>
      <v-card-text>Стоимость: {{ cart.totalCost }} <span v-html="config.currency"></span></v-card-text>
    <v-btn-group class="d-flex justify-space-between">
      <v-btn>Заказать</v-btn>
      <v-btn>Очистить</v-btn>
    </v-btn-group>
  </v-card>
</template>

<script setup lang="ts">
import ShopProductCard from "@/components/ShopProductCard.vue";
import type { Product_model } from "@/models/product_model";
import { useCart } from "@/stores/cart";
import ShopProductList from "@/components/ShopProductList.vue";
import { useCommon } from "@/stores/common";

const cart = useCart();
const config = useCommon();


</script>

<style scoped>
  .shop-cart-order {
    width: 240px;
  }
</style>
