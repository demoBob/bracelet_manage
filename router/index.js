// 配置路由相关的信息
//import { resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../src/views/login/login')
const ChangePwd = () => import('../src/views/login/changePwd')
const Layout = () => import('../src/components/layout')
const Resource = () => import('../src/views/resource/resource')
const Fixed_phrase = () => import('../src/views/fixed_phrase/fixed_phrase')
const Topic = () => import('../src/views/topic/topic')
const Article = () => import('../src/views/article/article')
const Problem = () => import('../src/views/problem/problem')


// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/ChangePwd',
    name: 'ChangePwd',
    component: ChangePwd
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/Resource',
    beforeEnter: (to,from,next) =>{
      if (localStorage.getItem('access_token')) {
        next()
      }else{
        next('/login')
        //next()
      }
    },
    children: [{
      path: '/Resource',
      name: 'Resource',
      component: Resource
    },
    {
      path: '/Fixed_phrase',
      name: 'Fixed_phrase',
      component: Fixed_phrase
    },
    {
      path: '/Topic',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    },
    {
      path: '/Problem',
      name: 'Problem',
      component: Problem
    }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router  = new VueRouter({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  // 配置路由和组件之间的应用关系
  routes
})
// 导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.fullPath!='/login') {
//     if (sessionStorage.getItem('userinfo')) {
//       next()
//     }else{
//       next('/login')
//     }
//   }else{
//     next()
//   }
// });

// 3.将router对象传入到Vue实例
export default router