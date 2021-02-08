import Vue from 'vue';
import VueRouter from 'vue-router';
import ShopList from '../views/ShopList.vue';
import SingleItem from '../views/SingleItem.vue';
import CartView from '../views/CartView.vue';
import NotFound from '../views/NotFound.vue';

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
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior () {
    return {
      x: 0, 
      y: 0
    }
  }
})

export default router
