<template>
  <v-app-bar
      color="primary"
      density="compact">
    <template v-slot:prepend>
      <v-btn to="/" rounded>
        <v-icon size="large">mdi-home</v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click="showMemu = !showMemu"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Фильтры</v-app-bar-title>

    <template v-slot:append>
      <v-btn rounded to="/cart">
        <v-badge content="2"
                 color="error"
                 offset-x="-2"
                 offset-y="-2">
          <v-icon size="large">mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer
      v-model="showMemu"
      location="left"
  >
    <v-checkbox v-for="category in categories.categories"
                :key="category.id"
                :label="category.multyName"
                :value="category.id"
                @change="filterProducts"
                v-model="selectedCategories"
                density="compact"></v-checkbox>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCategories } from "@/stores/categories";
import { onBeforeMount } from "vue";

const showMemu = ref(false);
const categories = useCategories();
const selectedCategories = ref([]);
function getCategories() {
  categories.getCategories();
}

function filterProducts() {
  categories.setSelectedCategories(selectedCategories.value)
}

onBeforeMount(() => {
  getCategories();
})

</script>

<style scoped>

</style>
