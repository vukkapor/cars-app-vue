import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppCars from '@/components/AppCars'
import AddCar from '@/components/AddCar'
import Login from './components/Login'
import RegisterApp from './components/RegisterApp'
import SingleCar from './components/SingleCar'
import {
  authService
} from './services/Auth'

const routes = [{
    path: '/cars',
    component: AppCars,
    name: 'cars'
  },
  {
    path: '/cars/:id',
    component: SingleCar
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
  },
  {
    path: '/register',
    component: RegisterApp,
    name: 'register'
  }
]


export const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  console.log(to.name);

  if (to.name !== 'login' && to.name !== 'register' && !authService.isAuthenticated()) {
    return router.push({
      name: 'login'
    });
  }

  if (to.name === 'login' && authService.isAuthenticated()) {
    console.log(from.name);
    return router.push({
      name: from.name
    })
  }

  if (to.name === 'register' && authService.isAuthenticated()) {
    return router.push({
      name: from.name
    })
  }


  next();
})