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
    path: '/admin',
    name: 'layout',
    component: Layout,
    redirect: '/admin/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: '控制面板'
        },
        component: () => import('@/views/dashboard/index')
      },
      {
        path: 'photo',
        name: 'photo',
        meta: {
          title: '相册列表'
        },
        component: () => import('@/views/photo/index')
      },
      {
        path: 'user',
        name: 'user',
        meta: {
          title: '个人中心'
        },
        component: () => import('@/views/user/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login'
    },
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    name: 'home',
    meta: {
      title: "ECarry's Photo"
    },
    component: () => import('@/views/home/index')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
