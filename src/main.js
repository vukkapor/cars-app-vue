import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppCars from '@/components/AppCars'

const routes = [{
  path: '/cars',
  component: AppCars
}]


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
