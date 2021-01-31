import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: 'home',
        bgGrad1:'#fe7271',
        bgGrad2:'#fea8a7',
        bgBorder:'#51fae3'
      }
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    meta: {
        title: 'category',
        bgGrad1:'#8ecacb',
        bgGrad2:'#affef4',
        bgBorder:'#f7e8af'
      }
  },
  {
    path: '/time',
    name: 'Time',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "time" */ '../views/Time.vue'),
    meta: {
        title: 'time',
        bgGrad1:'#f49681',
        bgGrad2:'#fde3b4',
        bgBorder:'#658fe3'
      }
  },
  {
    path: '/result',
    name: 'Result',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "result" */ '../views/Result.vue'),
    meta: {
        title: 'result',
        bgGrad1:'#fe7271',
        bgGrad2:'#fea8a7',
        bgBorder:'#51fae3'
      }
  },
  {
    path: '/error',
    name: 'Error',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
