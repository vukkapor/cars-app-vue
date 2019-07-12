import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppCars from '@/components/AppCars'
import AddCar from '@/components/AddCar'
import Login from './components/Login'

const routes = [{
    path: '/cars',
    component: AppCars
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
    component: Login
  }
]


export const router = new VueRouter({
  routes: routes,
  mode: 'history'
}, )