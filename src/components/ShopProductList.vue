<template>
        <shop-product-card v-for="product in products"
                           :key="product.id"
                           :product="product">
        </shop-product-card>
</template>

<script setup lang="ts">
import ShopProductCard from "@/components/ShopProductCard.vue";
import type { Product_model } from "@/models/product_model";

const { products } = defineProps<{ products: Product_model[] }>();

</script>

<style scoped>

</style>
