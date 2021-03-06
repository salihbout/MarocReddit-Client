import Vue from 'vue';
import Home from './components/pages/Home.vue';
import Login from './components/users/login.vue';
import SignUp from './components/users/Signup.vue';
import Profile from './components/pages/Profile.vue';
import PostDetails from './components/posts/PostDetails.vue';
import PostAdd from './components/posts/PostAdd.vue';
import PostEdit from './components/posts/PostEdit.vue';
import Chat from './components/pages/chat.vue';
import ChatRoom from './components/pages/ChatRoom.vue';
import News from './components/pages/News.vue';

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
    path:'/posts/:id', 
    component: PostDetails, 
    name: 'PostShow',
  },
  {
    path:'/posts/:id/edit', 
    component: PostEdit, 
    name: 'PostEdit'
  },
  {
    path:'/posts/add', 
    component: PostAdd, 
    name: 'PostAdd'
  },
  {
    path:'/chat', 
    component: Chat, 
    name: 'Chat'
  },
  {
    path:'/news',
    component: News,
    name: 'News'
  },
  {
    path : '/room/:id',
    component: ChatRoom,
    name : 'ChatRoom'

  },
  {
    path : '/user/:id',
    component: Profile,
    name : 'Profile'

  }

];


