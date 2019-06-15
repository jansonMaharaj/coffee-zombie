import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
import OrderPage from './views/OrderPage.vue'
import OrderHistoryPage from './views/OrderHistoryPage.vue'
import ThankYou from './views/ThankYou.vue'
import RewardsPage from './views/RewardsPage.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Cart from './views/Cart.vue'
import Topup from './views/Topup.vue'
import TransferConfirm from './views/TransferConfirm.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Topup',
      name: 'Topup',
      component: Topup
    },
    
    {
      path: '/OrderPage',
      name: 'OrderPage',
      component: OrderPage
    },
    {
      path: '/OrderHistoryPage',
      name: 'OrderHistoryPage',
      component: OrderHistoryPage
    },
    {
      path: '/ThankYou',
      name: 'ThankYou',
      component: ThankYou
    },
    {
      path: '/RewardsPage',
      name: 'RewardsPage',
      component: RewardsPage
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    

    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/TransferConfirm',
      name: 'TransferConfirm',
      component: TransferConfirm
    },

   
   
   //keep this as a refrenrence
    // {
      //path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
   // }
  ]
})
