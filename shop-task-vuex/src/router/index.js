import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopList from '../views/ShopList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ShopList',
    component: ShopList
  }
]

const router = new VueRouter({
  routes
})

export default router
