import Vue from 'vue'
import Home from './components/pages/Home.vue'
import Login from './components/users/login.vue'
import SignUp from './components/users/Signup.vue'
import PostDetails from './components/posts/Post.vue'
import PostAdd from './components/posts/PostAdd.vue'
import PostEdit from './components/posts/PostEdit.vue'

export const  routes = [
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
    path: '/post',
    name: 'Post',
    component: Home,
    children : [  
      { path:':id/', component: PostDetails, name: 'postShow'},
      { path:':id/add', component: PostAdd, name: 'postAdd'},
      { path:':id/edit', component: PostEdit, name: 'postEdit'},
    
    ]
    
  },
  {
    path:'/user',
    component : PostDetails
  }

];


