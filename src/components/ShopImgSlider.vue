<template>
  <v-carousel hide-delimiters height="300">
    <v-carousel-item v-for="url in urls" key="url"
                     :src="url"
                     height="auto"
                     cover

    ></v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
const props = defineProps({ urls: { type: Array<string> } });
</script>

<style scoped>

</style>
