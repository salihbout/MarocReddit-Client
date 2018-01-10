import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home.vue'
import Login from '../components/users/login.vue'
import SignUp from '../components/users/Signup.vue'
import Post from '../components/posts/Post.vue'
import PostAdd from '../components/posts/PostAdd.vue'
import PostEdit from '../components/posts/PostEdit.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
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
    {
      path: '/posts',
      name: 'Posts',
      component: Home,
      children : [  
        { path:':id', component: Post, name: 'postShow'},
        { path:':id/add', component: PostAdd, name: 'postAdd'},
        { path:':id/edit', component: PostEdit, name: 'postEdit'},
      
      ]
      
    },

  ]
})
