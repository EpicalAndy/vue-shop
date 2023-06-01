<template>
  <v-card
      class="mx-2"
      width="250">
    <shop-img-slider :urls="props.product?.img_urls"></shop-img-slider>

    <v-card-title>
      {{ product?.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ product?.price || '999999' }} <span v-html="config.currency"></span>
    </v-card-subtitle>

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

const showDetail = ref(false);
const config = useCommon();
const props = defineProps({ product: { type: Object as PropType<Product_model> } });

</script>

<style scoped>

</style>
