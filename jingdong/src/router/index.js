import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

  const routes = [
    {
    path: '/',
    name: 'login',
        component: login
    },
    {
          path: '/register',
          name: 'register',
          component: Register
    },
    // {
    // path: '/login',
    // name: 'login',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
    // },
      {
          path: '/index',
          name: 'index',
          component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
      },
      {
          path: '/botnav',
          name: 'botnav',
          component: () => import(/* webpackChunkName: "about" */ '../views/botnav.vue'),
          children:[
              {
                  path: 'index',
                  name: 'index',
                  component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
              },
              {
                  path: 'list',
                  name: 'list',
                  component: () => import(/* webpackChunkName: "about" */ '../views/list.vue')
              },
              {
                  path: 'search',
                  name: 'search',
                  component: () => import(/* webpackChunkName: "about" */ '../views/search.vue')
              },
              {
                  path: 'mall',
                  name: 'mall',
                  meta:{
                      requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
                  },
                  component: () => import(/* webpackChunkName: "about" */ '../views/mall.vue')
              },
              {
                  path: 'mine',
                  name: 'mine',
                  meta:{
                      requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
                  },
                  component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
              },
          ]
      }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
