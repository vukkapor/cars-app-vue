import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppCars from '@/components/AppCars'
import AddCar from '@/components/AddCar'
import Login from './components/Login'

const routes = [{
    path: '/cars',
    component: AppCars,
    name: 'cars'
  },
  {
    path: '/add',
    component: AddCar
  },
  {
    path: '/edit/:id',
    component: AddCar
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
]


export const router = new VueRouter({
  routes: routes,
  mode: 'history'
}, )