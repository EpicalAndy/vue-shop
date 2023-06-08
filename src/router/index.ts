import { createRouter, createWebHistory } from 'vue-router'
import ShopProductsList from "@/views/ShopProductsListView.vue";
import ShopCart from "@/views/ShopCartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: ShopProductsList },
    {path: '/cart', component: ShopCart}
  ]
})

export default router
