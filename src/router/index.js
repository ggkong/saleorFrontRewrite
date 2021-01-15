import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Afp from '../views/Afp.vue'
import Product from '../views/Product.vue'
import { name } from 'file-loader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product/afp',
      name: 'afp',
      component: Afp
    },
  ]
})