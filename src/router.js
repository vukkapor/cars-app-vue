import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppCars from '@/components/AppCars'
import AddCar from '@/components/AddCar'

const routes = [{
  path: '/cars',
  component: AppCars
},
{
  path: '/add',
  component: AddCar
}]


export const router = new VueRouter({
  routes: routes,
  mode: 'history'
},
)
