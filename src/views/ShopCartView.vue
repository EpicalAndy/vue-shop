<template>
  <v-main>
    <v-container fluid>
      <v-row dense>
        <template v-if="cart.allProductsCount">
          <v-col cols="6">
<!--            <shop-product-list :products="cart.productsList"></shop-product-list>-->

            <shop-products-table :headers="tableHeaders"
                                 v-model:products="talbeData"
                                  @update-cart-product="updateProductCount">
            </shop-products-table>
          </v-col>

          <v-col cols="6">
            <shop-cart-order></shop-cart-order>
          </v-col>
        </template>
        <template v-else>
          <v-alert-title>В корзине ничего нет</v-alert-title>
        </template>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>

import ShopCart from "@/components/ShopCartOrder.vue";
import ShopProductList from "@/components/ShopProductList.vue";
import { useCart } from "@/stores/cart";
import ShopCartOrder from "@/components/ShopCartOrder.vue";
import ShopProductsTable from "@/components/ShopProductsTable.vue";
import { computed } from "vue";

const cart = useCart();
const products = cart.products;

const tableHeaders = [
  { title: 'Наименование', key: 'name' },
  { title: 'Цена', key: 'price' },
  { title: 'Количество', key: 'count' }
];
const talbeData = computed(() => {
  return products.map(item => {
    return { name: item.product.name, price: item.product.price, count: item.count, productId: item.productId }
  });
})

function updateProductCount(item, value) {
  let _val = Number.isInteger(+value) ? +value : 1 ;
  const _item = Object.assign({}, item.raw)

  _item.count = _val;

  cart.updateProductInCart(_item);
}

</script>

<style scoped>

</style>
