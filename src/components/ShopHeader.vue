<template>
    <v-app-bar
        color="primary"
        density="compact"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Список товаров</v-app-bar-title>

      <template v-slot:append>
        <v-btn rounded>
          <v-badge content="2" color="error" offset-x="-2" offset-y="-2">
            <v-icon size="large">mdi-cart-outline</v-icon>
          </v-badge>
        </v-btn>
      </template>
    </v-app-bar>
</template>

<script>
export default {
  name: "ShopHeader"
}
</script>

<style scoped>

</style>
