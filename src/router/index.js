import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layouts/index.vue'

Vue.use(VueRouter)

// 解决当前路由重复跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user/index')
      }
    ]
  },
  {
    path: '/host',
    name: 'host',
    component: Layout,
    children: [
      {
        path: 'physics',
        name: 'physics',
        component: () => import('@/views/host/PhysicsHost')
      },
      {
        path: 'cloud',
        name: 'cloud',
        component: () => import('@/views/host/CloudHost')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
