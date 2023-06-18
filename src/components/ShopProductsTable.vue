<template>
  <v-card>
    <v-data-table :headers="headers"
                  :items="products"
                  :disable-pagination="true"
                  :footer-props="{ disablePagination: true, disableItemsPerPage : true }">
      <template v-slot:item="{ item }" :key="item.selectable.id">
        <tr>
          <td>{{ item.selectable.name }}</td>
          <td>{{ item.selectable.price }}</td>
          <td>
            <v-text-field label=""
                          type="number"
                          :min="0"
                          :model-value="item.selectable.count"

                          @input="updateCount(item, $event)"
                          variant="outlined">
            </v-text-field>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>

</template>

<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'
import * as events from "events";

const { products, headers } = defineProps<{ products: any[], headers: any[] }>();
const emits = defineEmits([ 'UpdateCartProduct' ]);

function updateCount(item: VDataTable, ev: InputEvent) {
  const target = ev.target as HTMLInputElement;

  emits('UpdateCartProduct', item, target?.value);
}

</script>

<style scoped>

</style>
