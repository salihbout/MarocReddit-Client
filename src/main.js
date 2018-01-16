// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import {routes} from './router'
import {store} from './store'




Vue.use(Element);
Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes : routes
});
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router : router,
  store ,
  render: function(h) {
    return h(App)
}
})
