import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:"/login",
      name:"login",
      component:Login
    },
    {
      path:"/VisualDisplay",
      name:"VisualDisplay",
      component:()=> import('./views/VisualDisplay.vue')
    },
    {
      path:"/AllScore",
      name:"AllScore",
      component:()=>import('./views/AllScore.vue')
    },
    {
      path:"/DeanVisual",
      name:"DeanVisual",
      component:()=> import('./views/DeanVisual.vue')
    },
    {
      path:"/charts",
      name:"charts",
      component:()=>import('./views/Charts.vue')
    }
  ]
})

//  admin  响应式
