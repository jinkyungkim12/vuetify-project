import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Grid from '../views/GridView.vue'
import Prac_breakPoint from '../views/PracBreakPoint.vue'
import PracTable from '../views/PracTable.vue'
import SignIn from '../views/member/SignIn.vue'
import SignUp from '../views/member/SignUp.vue'
import TestPage from '../views/member/testPage.vue'
import ProductList from '../views/page/ProductList.vue'
import test from '../views/test/test.vue'
import test2 from '../views/test/test2.vue'
import test3 from '../views/test/test3.vue'
import test4 from '../views/test/test4.vue'
import test5 from '../views/test/test5.vue'
import DefaultLayout from '@/layouts/default/index.vue'
import MemberLayout from '@/layouts/member/index1.vue'
import PageLayout from '@/layouts/page/index2.vue' 
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/grid',
        name: 'Grid',
        component: Grid
      },
      {
        path: '/prac_breakPoint',
        name: 'Prac_breakPoint',
        component: Prac_breakPoint
      },
      {
        path: '/pracTable',
        name: 'PracTable',
        component: PracTable
      },
      {
        path: '/test',
        name: 'test',
        component: test
      },
      {
        path: '/test2',
        name: 'test2',
        component: test2
      },
      {
        path: '/test3',
        name: 'test3',
        component: test3
      },
      {
        path: '/test4',
        name: 'test4',
        component: test4
      },
      {
        path: '/test5',
        name: 'test5',
        component: test5
      },
    ]
  },
  {
    path: '/member',
    component: MemberLayout,
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: 'test-page',
        name: 'TestPage',
        component: TestPage
      },
    ]
  },
  {
    path: '/page',
    component: PageLayout,
    children: [
      {
        path: 'productList',
        name: 'ProductList',
        component: ProductList
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
