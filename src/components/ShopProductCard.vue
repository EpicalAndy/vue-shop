<template>
  <v-card
      class="mx-2 mt-4"
      width="250">
    <shop-img-slider :urls="props.product?.img_urls"></shop-img-slider>
    <v-card-title>
      {{ product?.name }}
    </v-card-title>
    <v-row>
      <v-col cols="6">
        <v-card-subtitle>
          {{ product?.price || '0' }} <span v-html="config.currency"></span>
        </v-card-subtitle>
      </v-col>

      <v-col cols="6">
        <!--          <v-btn>
                    <v-icon size="large">mdi-minus</v-icon>
                  </v-btn>-->
        <v-btn @click="addToCart"
               v-if="!cart.isProductInCart(product.id)"
               density="compact">
          <v-icon size="large">
            mdi-plus
          </v-icon>
        </v-btn>
        <v-card-subtitle v-else
                         class="font-weight-bold bg-green-lighten-1 rounded"
                         color="primary">
          В корзине!
        </v-card-subtitle>


      </v-col>
    </v-row>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
          :icon="showDetail ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="showDetail = !showDetail">
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showDetail">
        <v-divider></v-divider>

        <v-card-text>
          {{ product?.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup lang="ts">
import type { Product_model } from '@/models/product_model'
import type { PropType } from "vue";
import { ref } from "vue";
import { useCommon } from "@/stores/common";
import ShopImgSlider from "@/components/ShopImgSlider.vue";
import { useCart } from "@/stores/cart";

const showDetail = ref(false);
const config = useCommon();
const props = defineProps({ product: { type: Object as PropType<Product_model> } });
const cart = useCart();

function addToCart() {
  props.product?.id && cart.addProduct(props.product.id);
}

</script>

<style scoped>

</style>
