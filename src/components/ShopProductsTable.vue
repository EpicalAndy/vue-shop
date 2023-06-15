<template>
  <v-card>
    <v-data-table :headers="headers"
                  :items="products"
                  :custom-sort="customSort"
                  :disable-pagination="true"
                  :footer-props="{ disablePagination: true, disableItemsPerPage : true }">
    </v-data-table>
  </v-card>

</template>

<script setup lang="ts">
import { VDataTable } from 'vuetify/labs/VDataTable'

const { products, headers } = defineProps<{ products: any[], headers: any[] }>();

function customSort(item, index, isDesc) {
  debugger
}
</script>

<style scoped>

</style>
