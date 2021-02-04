import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import employeedashboard from '@/components/employeedashboard'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: 'light',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/index',
      name: 'indexs',
      component: index,
    },
    {
      path: '/employeedashboard',
      name: 'employeedashboard',
      component: employeedashboard,
    }
  ],
  linkActiveClass: "active",
})
export default router