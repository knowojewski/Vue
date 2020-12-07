import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopList from '../views/ShopList.vue'
import SingleItem from '../views/SingleItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ShopList',
    component: ShopList
  },
  {
    path: '/product/:id',
    name: 'SingleItem',
    component: SingleItem
  }
]

const router = new VueRouter({
  routes
})

export default router
