import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'
import Login from '../components/users/login.vue'
import SignUp from '../components/users/Signup.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Home',
      component: Home
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },

  ]
})
